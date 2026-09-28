import { z } from "zod";

export const jobProfileSchema = z.object({
  title: z.string().min(1),
  mustHaveSkills: z.array(z.string()).max(20),
  niceToHaveSkills: z.array(z.string()).max(20),
  responsibilities: z.array(z.string()).max(20),
  experienceRequirements: z.array(z.string()).max(20),
  educationRequirements: z.array(z.string()).max(10),
  certifications: z.array(z.string()).max(10),
  domainKeywords: z.array(z.string()).max(20),
});

export const candidateAssessmentSchema = z.object({
  fitScore: z.number().int().min(0).max(100),
  confidence: z.number().min(0).max(1),
  matchedRequirements: z.array(z.string()).max(6),
  missingRequirements: z.array(z.string()).max(6),
  supportingEvidence: z.array(z.string()).max(6),
  summary: z.string().min(1).max(800),
  needsHumanReview: z.boolean(),
});

export type JobProfile = z.infer<typeof jobProfileSchema>;
export type CandidateAssessment = z.infer<typeof candidateAssessmentSchema>;

const stringArray = { type: "array", items: { type: "string" } } as const;

export const jobProfileJsonSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    mustHaveSkills: stringArray,
    niceToHaveSkills: stringArray,
    responsibilities: stringArray,
    experienceRequirements: stringArray,
    educationRequirements: stringArray,
    certifications: stringArray,
    domainKeywords: stringArray,
  },
  required: [
    "title",
    "mustHaveSkills",
    "niceToHaveSkills",
    "responsibilities",
    "experienceRequirements",
    "educationRequirements",
    "certifications",
    "domainKeywords",
  ],
  additionalProperties: false,
} as const;

export const candidateAssessmentJsonSchema = {
  type: "object",
  properties: {
    fitScore: { type: "integer", minimum: 0, maximum: 100 },
    confidence: { type: "number", minimum: 0, maximum: 1 },
    matchedRequirements: stringArray,
    missingRequirements: stringArray,
    supportingEvidence: stringArray,
    summary: { type: "string" },
    needsHumanReview: { type: "boolean" },
  },
  required: [
    "fitScore",
    "confidence",
    "matchedRequirements",
    "missingRequirements",
    "supportingEvidence",
    "summary",
    "needsHumanReview",
  ],
  additionalProperties: false,
} as const;
