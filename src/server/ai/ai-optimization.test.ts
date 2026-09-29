import assert from "node:assert/strict";
import test from "node:test";

void test("canonicalizes a job profile into a stable compact prefix", async () => {
  const profileModule = (await import("./canonical-profile.ts").catch(
    () => ({}),
  )) as {
    serializeCanonicalJobProfile?: (profile: {
      title: string;
      mustHaveSkills: string[];
      niceToHaveSkills: string[];
      responsibilities: string[];
      experienceRequirements: string[];
      educationRequirements: string[];
      certifications: string[];
      domainKeywords: string[];
    }) => string;
  };
  assert.equal(
    typeof profileModule.serializeCanonicalJobProfile,
    "function",
    "serializeCanonicalJobProfile must be implemented",
  );
  if (!profileModule.serializeCanonicalJobProfile) return;

  const serialized = profileModule.serializeCanonicalJobProfile({
    title: "  Data   Analyst ",
    mustHaveSkills: [" SQL ", "Python", "sql"],
    niceToHaveSkills: [],
    responsibilities: ["Build reports  ", " Build reports"],
    experienceRequirements: [],
    educationRequirements: [],
    certifications: [],
    domainKeywords: ["retail"],
  });

  assert.equal(
    serialized,
    '{"title":"Data Analyst","mustHaveSkills":["SQL","Python"],"niceToHaveSkills":[],"responsibilities":["Build reports"],"experienceRequirements":[],"educationRequirements":[],"certifications":[],"domainKeywords":["retail"]}',
  );
});

void test("normalizes cached and uncached provider token usage", async () => {
  const usageModule = (await import("./token-usage.ts").catch(() => ({}))) as {
    normalizeTokenUsage?: (usage: {
      inputTokens?: number;
      inputTokenDetails?: {
        noCacheTokens?: number;
        cacheReadTokens?: number;
      };
      outputTokens?: number;
    }) => {
      inputTokens: number;
      cachedInputTokens: number;
      uncachedInputTokens: number;
      outputTokens: number;
      requestCount: number;
    };
  };
  assert.equal(
    typeof usageModule.normalizeTokenUsage,
    "function",
    "normalizeTokenUsage must be implemented",
  );
  if (!usageModule.normalizeTokenUsage) return;

  assert.deepEqual(
    usageModule.normalizeTokenUsage({
      inputTokens: 1_000,
      inputTokenDetails: {
        noCacheTokens: 300,
        cacheReadTokens: 700,
      },
      outputTokens: 180,
    }),
    {
      inputTokens: 1_000,
      cachedInputTokens: 700,
      uncachedInputTokens: 300,
      outputTokens: 180,
      requestCount: 1,
    },
  );
});

void test("derives uncached input when the provider omits its detail", async () => {
  const { normalizeTokenUsage } = await import("./token-usage.ts");

  assert.deepEqual(
    normalizeTokenUsage({
      inputTokens: 900,
      inputTokenDetails: { cacheReadTokens: 600 },
      outputTokens: 120,
    }),
    {
      inputTokens: 900,
      cachedInputTokens: 600,
      uncachedInputTokens: 300,
      outputTokens: 120,
      requestCount: 1,
    },
  );
});
