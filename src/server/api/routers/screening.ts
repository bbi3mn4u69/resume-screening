import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { env } from "~/env";
import { evaluateCandidate, extractJobProfile } from "~/server/ai/evaluate";
import { PROMPT_VERSION } from "~/server/ai/prompts";
import { jobProfileSchema } from "~/server/ai/schemas";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getMatchLabel, MATCH_THRESHOLDS } from "~/server/screening/labels";
import {
  buildRelevantResumeExcerpt,
  selectCandidatesForScreening,
} from "~/server/screening/pre-screen";
import { finalizeRunFailure } from "~/server/screening/run-lifecycle";

const DATASET_NAME = "resume-data-set-v1";

const createRunInput = z.object({
  jobTitle: z.string().trim().min(2).max(160),
  jobDescription: z.string().trim().min(80).max(30_000),
  datasetCategory: z.string().trim().min(1).max(120).nullable().default(null),
});

const resumeCatalogInput = z.object({
  search: z.string().trim().max(120).default(""),
  category: z.string().trim().max(120).nullable().default(null),
  page: z.number().int().min(1).default(1),
});

function parseList(value: string | null) {
  if (!value) return [];
  const parsed: unknown = JSON.parse(value);
  return z.array(z.string()).parse(parsed);
}

export const screeningRouter = createTRPCRouter({
  config: publicProcedure.query(async ({ ctx }) => ({
    configured: Boolean(env.GROQ_API_KEY),
    model: env.GROQ_MODEL,
    maxResumes: env.MAX_RESUMES_PER_RUN,
    importedCount: await ctx.db.resume.count({
      where: { datasetName: DATASET_NAME },
    }),
    thresholds: MATCH_THRESHOLDS,
  })),

  resumeCatalog: publicProcedure
    .input(resumeCatalogInput)
    .query(async ({ ctx, input }) => {
      const pageSize = 12;
      const where = {
        datasetName: DATASET_NAME,
        ...(input.category ? { originalCategory: input.category } : undefined),
        ...(input.search
          ? {
              OR: [
                {
                  externalId: {
                    contains: input.search,
                    mode: "insensitive" as const,
                  },
                },
                {
                  rawText: {
                    contains: input.search,
                    mode: "insensitive" as const,
                  },
                },
              ],
            }
          : undefined),
      };
      const [total, resumes, categories] = await Promise.all([
        ctx.db.resume.count({ where }),
        ctx.db.resume.findMany({
          where,
          orderBy: [{ originalCategory: "asc" }, { externalId: "asc" }],
          skip: (input.page - 1) * pageSize,
          take: pageSize,
          select: {
            id: true,
            externalId: true,
            originalCategory: true,
            rawText: true,
          },
        }),
        ctx.db.resume.groupBy({
          by: ["originalCategory"],
          where: { datasetName: DATASET_NAME },
          _count: { _all: true },
          orderBy: { originalCategory: "asc" },
        }),
      ]);

      return {
        total,
        page: input.page,
        pageSize,
        pageCount: Math.max(1, Math.ceil(total / pageSize)),
        categories: categories.map((item) => ({
          category: item.originalCategory ?? "UNCATEGORISED",
          count: item._count._all,
        })),
        resumes: resumes.map((resume) => ({
          id: resume.id,
          externalId: resume.externalId ?? resume.id,
          category: resume.originalCategory ?? "Uncategorised",
          preview: resume.rawText.slice(0, 220),
        })),
      };
    }),

  resumeDetail: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const resume = await ctx.db.resume.findFirst({
        where: { id: input.id, datasetName: DATASET_NAME },
        select: {
          id: true,
          externalId: true,
          originalCategory: true,
          sourceFileName: true,
          sourceRow: true,
          rawText: true,
          resumeHtml: true,
        },
      });

      if (!resume) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Resume not found.",
        });
      }

      return {
        id: resume.id,
        externalId: resume.externalId ?? resume.id,
        category: resume.originalCategory ?? "Uncategorised",
        sourceFileName: resume.sourceFileName,
        sourceRow: resume.sourceRow,
        rawText: resume.rawText,
        resumeHtml: resume.resumeHtml,
      };
    }),

  createRun: publicProcedure
    .input(createRunInput)
    .mutation(async ({ ctx, input }) => {
      if (!env.GROQ_API_KEY) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message:
            "Groq is not configured. Add GROQ_API_KEY and restart the app.",
        });
      }
      const [datasetCandidates, allResumes] = await Promise.all([
        ctx.db.resume.count({ where: { datasetName: DATASET_NAME } }),
        ctx.db.resume.findMany({
          where: {
            datasetName: DATASET_NAME,
            ...(input.datasetCategory
              ? { originalCategory: input.datasetCategory }
              : undefined),
          },
          orderBy: { externalId: "asc" },
          select: {
            id: true,
            sanitizedText: true,
            originalCategory: true,
          },
        }),
      ]);
      if (datasetCandidates === 0) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "The base resume dataset has not been seeded.",
        });
      }
      if (allResumes.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `No resumes are available for ${input.datasetCategory ?? "the selected job type"}.`,
        });
      }
      const { profile, usage: profileUsage } = await extractJobProfile(
        input.jobTitle,
        input.jobDescription,
      );
      const ranked = selectCandidatesForScreening(
        profile,
        allResumes,
        env.MAX_RESUMES_PER_RUN,
        undefined,
        input.datasetCategory,
      );
      const resumesById = new Map(
        allResumes.map((resume) => [resume.id, resume]),
      );
      const resumes = ranked.flatMap((candidate) => {
        const resume = resumesById.get(candidate.id);
        return resume
          ? [{ ...resume, preScreenScore: candidate.preScreenScore }]
          : [];
      });
      const originalInputCharacters = resumes.reduce(
        (total, resume) => total + resume.sanitizedText.length,
        0,
      );
      const filteredInputCharacters = resumes.reduce(
        (total, resume) =>
          total +
          buildRelevantResumeExcerpt(profile, resume.sanitizedText).length,
        0,
      );
      const run = await ctx.db.screeningRun.create({
        data: {
          status: "PROCESSING",
          modelName: env.GROQ_MODEL,
          promptVersion: PROMPT_VERSION,
          datasetCategory: input.datasetCategory,
          datasetCandidates,
          sourceCandidates: allResumes.length,
          totalCandidates: resumes.length,
          originalInputCharacters,
          filteredInputCharacters,
          inputTokens: profileUsage.inputTokens,
          cachedInputTokens: profileUsage.cachedInputTokens,
          uncachedInputTokens: profileUsage.uncachedInputTokens,
          outputTokens: profileUsage.outputTokens,
          aiRequestCount: profileUsage.requestCount,
          startedAt: new Date(),
          job: {
            create: {
              title: input.jobTitle,
              description: input.jobDescription,
              extractedProfileJson: JSON.stringify(profile),
            },
          },
          evaluations: {
            create: resumes.map((resume) => ({
              resumeId: resume.id,
              preScreenScore: resume.preScreenScore,
            })),
          },
        },
      });

      return {
        runId: run.id,
        datasetCategory: input.datasetCategory,
        datasetCandidates,
        sourceCandidates: allResumes.length,
        selectedCandidates: resumes.length,
        originalInputCharacters,
        filteredInputCharacters,
      };
    }),

  processRun: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const run = await ctx.db.screeningRun.findUnique({
        where: { id: input.id },
        include: {
          job: true,
          evaluations: {
            where: { status: "PENDING" },
            include: { resume: true },
          },
        },
      });
      if (!run) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Run not found." });
      }
      if (run.evaluations.length === 0) {
        return { runId: run.id, status: run.status };
      }

      return finalizeRunFailure(
        async () => {
          const profile = jobProfileSchema.parse(
            JSON.parse(run.job.extractedProfileJson),
          );
          const resumes = run.evaluations.map((evaluation) => ({
            id: evaluation.resume.id,
            sanitizedText: evaluation.resume.sanitizedText,
          }));
          let cursor = 0;
          let newFailedCount = 0;
          const workers = Array.from(
            { length: Math.min(env.GROQ_CONCURRENCY, resumes.length) },
            async () => {
              while (cursor < resumes.length) {
                const resume = resumes[cursor++];
                if (!resume) break;
                let tokenUsage:
                  | Awaited<ReturnType<typeof evaluateCandidate>>["usage"]
                  | undefined;
                try {
                  const result = await evaluateCandidate(
                    profile,
                    buildRelevantResumeExcerpt(profile, resume.sanitizedText),
                  );
                  const { assessment } = result;
                  tokenUsage = result.usage;
                  const fitScore = Math.round(assessment.fitScore);
                  await ctx.db.resumeEvaluation.update({
                    where: {
                      runId_resumeId: { runId: run.id, resumeId: resume.id },
                    },
                    data: {
                      status: "COMPLETED",
                      fitScore,
                      matchLabel: getMatchLabel(fitScore),
                      confidence: assessment.confidence,
                      matchedRequirementsJson: JSON.stringify(
                        assessment.matchedRequirements,
                      ),
                      missingRequirementsJson: JSON.stringify(
                        assessment.missingRequirements,
                      ),
                      supportingEvidenceJson: JSON.stringify(
                        assessment.supportingEvidence,
                      ),
                      summary: assessment.summary,
                      needsHumanReview:
                        assessment.needsHumanReview ||
                        assessment.confidence <
                          MATCH_THRESHOLDS.humanReviewConfidence,
                    },
                  });
                } catch (error) {
                  newFailedCount += 1;
                  await ctx.db.resumeEvaluation.update({
                    where: {
                      runId_resumeId: { runId: run.id, resumeId: resume.id },
                    },
                    data: {
                      status: "FAILED",
                      errorMessage:
                        error instanceof Error
                          ? error.message.slice(0, 300)
                          : "Candidate evaluation failed.",
                      needsHumanReview: true,
                    },
                  });
                } finally {
                  await ctx.db.screeningRun.update({
                    where: { id: run.id },
                    data: {
                      processedCount: { increment: 1 },
                      ...(tokenUsage
                        ? {
                            inputTokens: {
                              increment: tokenUsage.inputTokens,
                            },
                            cachedInputTokens: {
                              increment: tokenUsage.cachedInputTokens,
                            },
                            uncachedInputTokens: {
                              increment: tokenUsage.uncachedInputTokens,
                            },
                            outputTokens: {
                              increment: tokenUsage.outputTokens,
                            },
                            aiRequestCount: {
                              increment: tokenUsage.requestCount,
                            },
                          }
                        : undefined),
                    },
                  });
                }
              }
            },
          );

          await Promise.all(workers);
          const failedCount = run.failedCount + newFailedCount;
          await ctx.db.screeningRun.update({
            where: { id: run.id },
            data: {
              failedCount,
              status:
                failedCount === 0
                  ? "COMPLETED"
                  : failedCount < run.totalCandidates
                    ? "PARTIAL"
                    : "FAILED",
              completedAt: new Date(),
            },
          });

          return { runId: run.id, status: "finished" };
        },
        async () => {
          await ctx.db.screeningRun.update({
            where: { id: run.id },
            data: { status: "FAILED", completedAt: new Date() },
          });
        },
      );
    }),

  run: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      const run = await ctx.db.screeningRun.findFirst({
        where: input.id ? { id: input.id } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
          job: true,
          evaluations: {
            include: { resume: true },
            orderBy: [{ fitScore: "desc" }, { confidence: "desc" }],
          },
        },
      });
      if (!run) return null;
      return {
        id: run.id,
        status: run.status,
        modelName: run.modelName,
        promptVersion: run.promptVersion,
        totalCandidates: run.totalCandidates,
        processedCount: run.processedCount,
        failedCount: run.failedCount,
        datasetCategory: run.datasetCategory,
        datasetCandidates: run.datasetCandidates,
        sourceCandidates: run.sourceCandidates,
        originalInputCharacters: run.originalInputCharacters,
        filteredInputCharacters: run.filteredInputCharacters,
        inputTokens: run.inputTokens,
        cachedInputTokens: run.cachedInputTokens,
        uncachedInputTokens: run.uncachedInputTokens,
        outputTokens: run.outputTokens,
        aiRequestCount: run.aiRequestCount,
        inputReductionPercent:
          run.originalInputCharacters === 0
            ? 0
            : Math.round(
                (1 -
                  run.filteredInputCharacters / run.originalInputCharacters) *
                  100,
              ),
        createdAt: run.createdAt,
        jobTitle: run.job.title,
        jobDescription: run.job.description,
        jobProfile: jobProfileSchema.parse(
          JSON.parse(run.job.extractedProfileJson),
        ),
        evaluations: run.evaluations.map((evaluation) => ({
          id: evaluation.id,
          resumeId: evaluation.resume.id,
          candidateId:
            evaluation.resume.externalId ??
            `Resume ${String(evaluation.resume.sourceRow ?? 0).padStart(3, "0")}`,
          status: evaluation.status,
          preScreenScore: evaluation.preScreenScore,
          fitScore: evaluation.fitScore,
          matchLabel: evaluation.matchLabel,
          confidence: evaluation.confidence,
          matchedRequirements: parseList(evaluation.matchedRequirementsJson),
          missingRequirements: parseList(evaluation.missingRequirementsJson),
          supportingEvidence: parseList(evaluation.supportingEvidenceJson),
          summary: evaluation.summary,
          needsHumanReview: evaluation.needsHumanReview,
          errorMessage: evaluation.errorMessage,
        })),
      };
    }),

  history: publicProcedure.query(async ({ ctx }) => {
    const runs = await ctx.db.screeningRun.findMany({
      orderBy: { createdAt: "desc" },
      take: 30,
      include: {
        job: true,
        evaluations: { select: { matchLabel: true, fitScore: true } },
      },
    });

    return runs.map((run) => {
      const scored = run.evaluations.flatMap((item) =>
        item.fitScore === null ? [] : [item.fitScore],
      );
      return {
        id: run.id,
        jobTitle: run.job.title,
        jobDescription: run.job.description,
        status: run.status,
        createdAt: run.createdAt,
        totalCandidates: run.totalCandidates,
        processedCount: run.processedCount,
        failedCount: run.failedCount,
        datasetCategory: run.datasetCategory,
        datasetCandidates: run.datasetCandidates,
        sourceCandidates: run.sourceCandidates,
        originalInputCharacters: run.originalInputCharacters,
        filteredInputCharacters: run.filteredInputCharacters,
        averageScore:
          scored.length === 0
            ? null
            : Math.round(
                scored.reduce((sum, score) => sum + score, 0) / scored.length,
              ),
        highMatches: run.evaluations.filter(
          (item) => item.matchLabel === "HIGH_MATCH",
        ).length,
      };
    });
  }),
});
