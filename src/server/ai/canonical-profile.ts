import type { JobProfile } from "./schemas.ts";

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeList(values: string[]) {
  const seen = new Set<string>();
  return values.flatMap((value) => {
    const normalized = normalizeText(value);
    const key = normalized.toLocaleLowerCase();
    if (!normalized || seen.has(key)) return [];
    seen.add(key);
    return [normalized];
  });
}

export function canonicalizeJobProfile(profile: JobProfile): JobProfile {
  return {
    title: normalizeText(profile.title),
    mustHaveSkills: normalizeList(profile.mustHaveSkills),
    niceToHaveSkills: normalizeList(profile.niceToHaveSkills),
    responsibilities: normalizeList(profile.responsibilities),
    experienceRequirements: normalizeList(profile.experienceRequirements),
    educationRequirements: normalizeList(profile.educationRequirements),
    certifications: normalizeList(profile.certifications),
    domainKeywords: normalizeList(profile.domainKeywords),
  };
}

export function serializeCanonicalJobProfile(profile: JobProfile) {
  return JSON.stringify(canonicalizeJobProfile(profile));
}
