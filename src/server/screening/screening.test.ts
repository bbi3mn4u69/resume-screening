import assert from "node:assert/strict";
import test from "node:test";

import {
  detectCsvColumns,
  getCategoryCounts,
  normalizeResumeRows,
} from "../../lib/csv.ts";
import { candidateAssessmentSchema, jobProfileSchema } from "../ai/schemas.ts";
import {
  jobProfileSystemPrompt,
  screeningSystemPrompt,
} from "../ai/prompts.ts";
import { getMatchLabel } from "./labels.ts";
import {
  buildRelevantResumeExcerpt,
  getPreScreenScore,
  selectCandidatesForScreening,
} from "./pre-screen.ts";
import { sanitizeResume } from "./sanitize-resume.ts";

void test("maps every score boundary to its fixed match label", () => {
  assert.deepEqual([100, 80, 79, 60, 59, 35, 34, 0].map(getMatchLabel), [
    "HIGH_MATCH",
    "HIGH_MATCH",
    "MODERATE_MATCH",
    "MODERATE_MATCH",
    "LOW_MATCH",
    "LOW_MATCH",
    "NOT_RELEVANT",
    "NOT_RELEVANT",
  ]);
});

void test("rejects scores outside the accepted range", () => {
  assert.throws(() => getMatchLabel(-1));
  assert.throws(() => getMatchLabel(101));
});

void test("masks contact details while preserving job evidence", () => {
  const result = sanitizeResume(
    "Data Scientist at Northstar University\nava@example.com | +61 412 345 678\nhttps://portfolio.example.com\nPython and SQL",
  );

  assert.match(result, /Data Scientist at Northstar University/);
  assert.match(result, /Python and SQL/);
  assert.doesNotMatch(result, /ava@example\.com/);
  assert.doesNotMatch(result, /412 345 678/);
  assert.doesNotMatch(result, /portfolio\.example\.com/);
  assert.match(result, /\[EMAIL REDACTED\]/);
  assert.match(result, /\[PHONE REDACTED\]/);
  assert.match(result, /\[URL REDACTED\]/);
});

void test("detects common resume and metadata columns case-insensitively", () => {
  assert.deepEqual(detectCsvColumns(["ID", "Resume_str", "Category"]), {
    resumeText: "Resume_str",
    externalId: "ID",
    category: "Category",
  });
  assert.equal(detectCsvColumns(["name", "notes"]).resumeText, null);
});

void test("normalizes valid resume rows and reports skipped blanks", () => {
  const result = normalizeResumeRows(
    [
      { ID: "a-1", Resume: "  React\n\n TypeScript  ", Category: "Web" },
      { ID: "a-2", Resume: "   ", Category: "Data" },
    ],
    { resumeText: "Resume", externalId: "ID", category: "Category" },
    "resumes.csv",
  );

  assert.equal(result.skipped, 1);
  assert.deepEqual(result.resumes, [
    {
      externalId: "a-1",
      originalCategory: "Web",
      rawText: "React TypeScript",
      sanitizedText: "React TypeScript",
      sourceFileName: "resumes.csv",
      sourceRow: 2,
    },
  ]);
});

void test("summarizes imported resume categories for visualization", () => {
  assert.deepEqual(
    getCategoryCounts([
      { originalCategory: "HR" },
      { originalCategory: "ENGINEERING" },
      { originalCategory: "HR" },
      { originalCategory: null },
    ]),
    [
      { category: "HR", count: 2 },
      { category: "ENGINEERING", count: 1 },
      { category: "UNCATEGORISED", count: 1 },
    ],
  );
});

void test("validates strict job profiles and candidate assessments", () => {
  assert.equal(
    jobProfileSchema.safeParse({
      title: "Data Scientist",
      mustHaveSkills: ["Python"],
      niceToHaveSkills: [],
      responsibilities: ["Build models"],
      experienceRequirements: [],
      educationRequirements: [],
      certifications: [],
      domainKeywords: ["forecasting"],
    }).success,
    true,
  );

  assert.equal(
    candidateAssessmentSchema.safeParse({
      fitScore: 82,
      confidence: 0.84,
      matchedRequirements: ["Python"],
      missingRequirements: ["Cloud deployment not evidenced"],
      supportingEvidence: ["Built forecasting models in Python"],
      summary: "Strong evidence for the core analytical requirements.",
      needsHumanReview: false,
    }).success,
    true,
  );

  assert.equal(
    candidateAssessmentSchema.safeParse({
      fitScore: 101,
      confidence: 0.84,
      matchedRequirements: [],
      missingRequirements: [],
      supportingEvidence: [],
      summary: "Invalid score.",
      needsHumanReview: false,
    }).success,
    false,
  );
});

void test("pre-screen score reflects only job-relevant term overlap", () => {
  const score = getPreScreenScore(
    {
      title: "Data Scientist",
      mustHaveSkills: ["Python", "SQL"],
      niceToHaveSkills: ["AWS"],
      responsibilities: [],
      experienceRequirements: [],
      educationRequirements: [],
      certifications: [],
      domainKeywords: ["forecasting"],
    },
    "Built forecasting systems with Python and SQL for retail demand.",
  );

  assert.equal(score, 75);
});

void test("selects the strongest resumes for the bounded Groq batch", () => {
  const profile = {
    title: "Data Scientist",
    mustHaveSkills: ["Python", "SQL"],
    niceToHaveSkills: ["AWS"],
    responsibilities: [],
    experienceRequirements: [],
    educationRequirements: [],
    certifications: [],
    domainKeywords: ["forecasting"],
  };
  const selected = selectCandidatesForScreening(
    profile,
    [
      { id: "weak", sanitizedText: "Customer service and scheduling" },
      { id: "strong", sanitizedText: "Python SQL AWS forecasting" },
      { id: "medium", sanitizedText: "Python and SQL" },
    ],
    2,
  );

  assert.deepEqual(selected, [
    { id: "strong", preScreenScore: 100 },
    { id: "medium", preScreenScore: 50 },
  ]);
});

void test("filters zero-evidence resumes after preserving a minimum review set", () => {
  const profile = {
    title: "Data Scientist",
    mustHaveSkills: ["Python", "SQL"],
    niceToHaveSkills: [],
    responsibilities: [],
    experienceRequirements: [],
    educationRequirements: [],
    certifications: [],
    domainKeywords: [],
  };

  const selected = selectCandidatesForScreening(
    profile,
    [
      { id: "python", sanitizedText: "Built production systems in Python" },
      { id: "sql", sanitizedText: "Designed SQL reporting queries" },
      {
        id: "unrelated-a",
        sanitizedText: "Retail rostering and cash handling",
      },
      {
        id: "unrelated-b",
        sanitizedText: "Commercial cookery and food safety",
      },
    ],
    100,
    1,
  );

  assert.deepEqual(
    selected.map((candidate) => candidate.id),
    ["python", "sql"],
  );
});

void test("limits pre-screening to the selected dataset job type", () => {
  const profile = {
    title: "Data Analyst",
    mustHaveSkills: ["SQL"],
    niceToHaveSkills: [],
    responsibilities: [],
    experienceRequirements: [],
    educationRequirements: [],
    certifications: [],
    domainKeywords: [],
  };

  const selected = selectCandidatesForScreening(
    profile,
    [
      {
        id: "data",
        sanitizedText: "Built SQL reporting pipelines",
        originalCategory: "DATA SCIENCE",
      },
      {
        id: "finance",
        sanitizedText: "Built SQL finance reports",
        originalCategory: "FINANCE",
      },
    ],
    10,
    1,
    "DATA SCIENCE",
  );

  assert.deepEqual(
    selected.map((candidate) => candidate.id),
    ["data"],
  );
});

void test("compresses a resume to job-relevant evidence before AI evaluation", () => {
  const profile = {
    title: "Data Scientist",
    mustHaveSkills: ["Python", "SQL"],
    niceToHaveSkills: ["AWS"],
    responsibilities: ["Build forecasting models"],
    experienceRequirements: [],
    educationRequirements: [],
    certifications: [],
    domainKeywords: ["forecasting"],
  };
  const unrelated =
    "Organised social events and maintained a large collection of unrelated hobby notes. ".repeat(
      20,
    );
  const resume = `${unrelated} Built Python forecasting models for retail demand. Wrote SQL pipelines and deployed services on AWS. ${unrelated}`;

  const excerpt = buildRelevantResumeExcerpt(profile, resume, 260);

  assert.ok(excerpt.length <= 260);
  assert.match(excerpt, /Python forecasting models/);
  assert.match(excerpt, /SQL pipelines/);
  assert.ok(excerpt.length < resume.length / 2);
});

void test("bounds the default candidate excerpt for free-tier throughput", () => {
  const profile = {
    title: "Data Scientist",
    mustHaveSkills: ["Python"],
    niceToHaveSkills: [],
    responsibilities: [],
    experienceRequirements: [],
    educationRequirements: [],
    certifications: [],
    domainKeywords: [],
  };
  const resume = "Built production Python systems. ".repeat(300);

  const excerpt = buildRelevantResumeExcerpt(profile, resume);

  assert.ok(excerpt.length <= 2_000);
});

void test("rejects candidate assessments that exceed the concise output budget", () => {
  const result = candidateAssessmentSchema.safeParse({
    fitScore: 70,
    confidence: 0.7,
    matchedRequirements: ["Python"],
    missingRequirements: [],
    supportingEvidence: [],
    summary: "x".repeat(401),
    needsHumanReview: false,
  });

  assert.equal(result.success, false);
});

void test("screening prompt agrees with the structured assessment schema", () => {
  assert.match(screeningSystemPrompt, /confidence.*number from 0 to 1/is);
  assert.match(screeningSystemPrompt, /do not output.*match classification/is);
  assert.match(
    screeningSystemPrompt,
    /fitScore.*matchedRequirements.*missingRequirements.*supportingEvidence.*summary.*needsHumanReview/is,
  );
});

void test("job profile prompt requests only schema-supported fields", () => {
  assert.match(
    jobProfileSystemPrompt,
    /title.*mustHaveSkills.*niceToHaveSkills.*responsibilities.*experienceRequirements.*educationRequirements.*certifications.*domainKeywords/is,
  );
  assert.doesNotMatch(jobProfileSystemPrompt, /role summary/i);
  assert.doesNotMatch(jobProfileSystemPrompt, /preferred experience/i);
  assert.doesNotMatch(jobProfileSystemPrompt, /preferred qualifications/i);
});

void test("retries Groq JSON validation failures with the fallback generator", async () => {
  const structuredOutputModule =
    (await import("../ai/structured-output.ts").catch(() => ({}))) as {
      generateWithJsonFallback?: <T>(
        strictGeneration: () => Promise<T>,
        fallbackGeneration: () => Promise<T>,
      ) => Promise<T>;
    };
  assert.equal(
    typeof structuredOutputModule.generateWithJsonFallback,
    "function",
    "generateWithJsonFallback must be implemented",
  );
  if (!structuredOutputModule.generateWithJsonFallback) return;

  let fallbackCalls = 0;
  const result = await structuredOutputModule.generateWithJsonFallback(
    async () => {
      throw Object.assign(new Error("Failed to validate JSON"), {
        statusCode: 400,
        responseBody: JSON.stringify({
          error: { code: "json_validate_failed", failed_generation: "" },
        }),
      });
    },
    async () => {
      fallbackCalls += 1;
      return "recovered";
    },
  );

  assert.equal(result, "recovered");
  assert.equal(fallbackCalls, 1);
});

void test("marks a screening run failed when processing aborts", async () => {
  const lifecycleModule = (await import("./run-lifecycle.ts").catch(
    () => ({}),
  )) as {
    finalizeRunFailure?: <T>(
      process: () => Promise<T>,
      markFailed: () => Promise<void>,
    ) => Promise<T>;
  };
  assert.equal(
    typeof lifecycleModule.finalizeRunFailure,
    "function",
    "finalizeRunFailure must be implemented",
  );
  if (!lifecycleModule.finalizeRunFailure) return;

  let failedStatusWrites = 0;
  await assert.rejects(
    lifecycleModule.finalizeRunFailure(
      async () => {
        throw new Error("database connection lost");
      },
      async () => {
        failedStatusWrites += 1;
      },
    ),
    /database connection lost/,
  );

  assert.equal(failedStatusWrites, 1);
});

void test("preserves the processing error when the failure status cannot be saved", async () => {
  const { finalizeRunFailure } = await import("./run-lifecycle.ts");

  await assert.rejects(
    finalizeRunFailure(
      async () => {
        throw new Error("candidate persistence failed");
      },
      async () => {
        throw new Error("database still unavailable");
      },
    ),
    /candidate persistence failed/,
  );
});

void test("wraps original resume HTML in an isolated document", async () => {
  const resumeDocumentModule =
    (await import("../../lib/resume-document.ts").catch(() => ({}))) as {
      createResumeDocument?: (html: string) => string;
    };
  assert.equal(
    typeof resumeDocumentModule.createResumeDocument,
    "function",
    "createResumeDocument must be implemented",
  );
  if (!resumeDocumentModule.createResumeDocument) return;

  const document = resumeDocumentModule.createResumeDocument(
    "<h1>Data Analyst</h1><p>SQL and Python</p>",
  );

  assert.match(document, /Content-Security-Policy/);
  assert.match(document, /default-src 'none'/);
  assert.match(document, /<h1>Data Analyst<\/h1>/);
  assert.match(document, /font-family: Inter/);
});
