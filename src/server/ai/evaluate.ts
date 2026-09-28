import "server-only";

import { createGroq } from "@ai-sdk/groq";
import { generateText, Output } from "ai";

import { env } from "~/env";
import {
  candidateAssessmentSchema,
  jobProfileSchema,
  type JobProfile,
} from "~/server/ai/schemas";
import {
  jobProfileSystemPrompt,
  screeningSystemPrompt,
} from "~/server/ai/prompts";
import { generateWithJsonFallback } from "~/server/ai/structured-output";

function model() {
  if (!env.GROQ_API_KEY) {
    throw new Error(
      "Groq is not configured. Add GROQ_API_KEY to the server environment.",
    );
  }
  return createGroq({ apiKey: env.GROQ_API_KEY })(env.GROQ_MODEL);
}

const generationOptions = {
  maxRetries: 2,
  temperature: 0,
  timeout: 60_000,
  providerOptions: {
    groq: {
      structuredOutputs: true,
      strictJsonSchema: true,
      reasoningFormat: "hidden",
      reasoningEffort: "low",
    },
  },
} as const;

function options(maxOutputTokens: number, structuredOutputs: boolean) {
  return {
    ...generationOptions,
    maxOutputTokens,
    providerOptions: {
      groq: {
        structuredOutputs,
        ...(structuredOutputs ? { strictJsonSchema: true } : {}),
        reasoningFormat: "hidden",
        reasoningEffort: "low",
      },
    },
  } as const;
}

export async function extractJobProfile(title: string, description: string) {
  const request = {
    model: model(),
    output: Output.object({ name: "job_profile", schema: jobProfileSchema }),
    system: jobProfileSystemPrompt,
    prompt: `JOB TITLE:\n${title}\n\nJOB DESCRIPTION:\n${description}`,
  } as const;
  const { output } = await generateWithJsonFallback(
    () => generateText({ ...request, ...options(1_800, true) }),
    () => generateText({ ...request, ...options(1_800, false) }),
  );
  return jobProfileSchema.parse(output);
}

export async function evaluateCandidate(
  profile: JobProfile,
  resumeText: string,
) {
  const request = {
    model: model(),
    output: Output.object({
      name: "candidate_assessment",
      schema: candidateAssessmentSchema,
    }),
    system: screeningSystemPrompt,
    prompt: `JOB PROFILE:\n${JSON.stringify(profile)}\n\nRESUME EVIDENCE:\n${resumeText.slice(0, 6_000)}`,
  } as const;
  const { output } = await generateWithJsonFallback(
    () => generateText({ ...request, ...options(1_000, true) }),
    () => generateText({ ...request, ...options(1_000, false) }),
  );
  return candidateAssessmentSchema.parse(output);
}
