import type { JobProfile } from "../ai/schemas.ts";

export const AI_RESUME_CHARACTER_LIMIT = 6_000;
export const MIN_AI_CANDIDATES = 10;

const STOP_WORDS = new Set([
  "and",
  "for",
  "from",
  "into",
  "of",
  "the",
  "to",
  "using",
  "with",
]);

function profileTerms(profile: JobProfile) {
  return [
    ...profile.mustHaveSkills.map((term) => ({ term, weight: 5 })),
    ...profile.responsibilities.map((term) => ({ term, weight: 4 })),
    ...profile.experienceRequirements.map((term) => ({ term, weight: 4 })),
    ...profile.educationRequirements.map((term) => ({ term, weight: 3 })),
    ...profile.certifications.map((term) => ({ term, weight: 3 })),
    ...profile.niceToHaveSkills.map((term) => ({ term, weight: 2 })),
    ...profile.domainKeywords.map((term) => ({ term, weight: 2 })),
  ]
    .map(({ term, weight }) => ({ term: term.trim().toLowerCase(), weight }))
    .filter(({ term }) => term.length > 0);
}

function fragmentScore(
  fragment: string,
  terms: ReturnType<typeof profileTerms>,
) {
  const normalized = fragment.toLowerCase();
  let score = 0;

  for (const { term, weight } of terms) {
    if (normalized.includes(term)) score += weight * 4;
    for (const token of term.split(/[^a-z0-9+#.]+/)) {
      if (
        token.length > 2 &&
        !STOP_WORDS.has(token) &&
        normalized.includes(token)
      ) {
        score += weight;
      }
    }
  }

  return score;
}

function splitResume(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text];
  return sentences.flatMap((sentence) => {
    const clean = sentence.replace(/\s+/g, " ").trim();
    if (clean.length <= 700) return clean ? [clean] : [];

    const chunks: string[] = [];
    for (let cursor = 0; cursor < clean.length; cursor += 700) {
      chunks.push(clean.slice(cursor, cursor + 700));
    }
    return chunks;
  });
}

export function buildRelevantResumeExcerpt(
  profile: JobProfile,
  resumeText: string,
  maxCharacters = AI_RESUME_CHARACTER_LIMIT,
) {
  const normalized = resumeText.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxCharacters) return normalized;

  const prefix = "Locally selected job-relevant resume evidence:\n";
  const budget = Math.max(0, maxCharacters - prefix.length);
  const terms = profileTerms(profile);
  const ranked = splitResume(normalized)
    .map((fragment, index) => ({
      fragment,
      index,
      score: fragmentScore(fragment, terms),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  if (ranked.length === 0) return normalized.slice(0, maxCharacters);

  const selected: typeof ranked = [];
  let used = 0;
  for (const item of ranked) {
    const separatorLength = selected.length > 0 ? 1 : 0;
    if (used + separatorLength + item.fragment.length > budget) continue;
    selected.push(item);
    used += separatorLength + item.fragment.length;
  }

  if (selected.length === 0) {
    return `${prefix}${ranked[0]?.fragment.slice(0, budget) ?? ""}`;
  }

  const evidence = selected
    .sort((a, b) => a.index - b.index)
    .map((item) => item.fragment)
    .join("\n");
  return `${prefix}${evidence}`.slice(0, maxCharacters);
}

export function getPreScreenScore(profile: JobProfile, resumeText: string) {
  const terms = [
    ...profile.mustHaveSkills,
    ...profile.niceToHaveSkills,
    ...profile.domainKeywords,
  ]
    .map((term) => term.trim().toLowerCase())
    .filter(Boolean);

  const uniqueTerms = [...new Set(terms)];
  if (uniqueTerms.length === 0) return 0;

  const haystack = resumeText.toLowerCase();
  const matched = uniqueTerms.filter((term) => haystack.includes(term)).length;
  return Math.round((matched / uniqueTerms.length) * 100);
}

export function selectCandidatesForScreening(
  profile: JobProfile,
  resumes: Array<{
    id: string;
    sanitizedText: string;
    originalCategory?: string | null;
  }>,
  limit: number,
  minimumCandidates = Math.min(MIN_AI_CANDIDATES, limit),
  category?: string | null,
) {
  const categoryPool = category
    ? resumes.filter((resume) => resume.originalCategory === category)
    : resumes;
  const ranked = categoryPool
    .map((resume) => ({
      id: resume.id,
      preScreenScore: getPreScreenScore(profile, resume.sanitizedText),
    }))
    .sort(
      (a, b) => b.preScreenScore - a.preScreenScore || a.id.localeCompare(b.id),
    );
  const relevantCount = ranked.filter(
    (candidate) => candidate.preScreenScore > 0,
  ).length;
  const selectedCount = Math.min(
    limit,
    ranked.length,
    Math.max(Math.min(minimumCandidates, ranked.length), relevantCount),
  );
  return ranked.slice(0, selectedCount);
}
