export const MATCH_THRESHOLDS = {
  high: 80,
  moderate: 60,
  low: 35,
  humanReviewConfidence: 0.65,
} as const;

export type MatchLabel =
  "HIGH_MATCH" | "MODERATE_MATCH" | "LOW_MATCH" | "NOT_RELEVANT";

export function getMatchLabel(score: number): MatchLabel {
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    throw new RangeError("Fit score must be an integer from 0 to 100.");
  }
  if (score >= MATCH_THRESHOLDS.high) return "HIGH_MATCH";
  if (score >= MATCH_THRESHOLDS.moderate) return "MODERATE_MATCH";
  if (score >= MATCH_THRESHOLDS.low) return "LOW_MATCH";
  return "NOT_RELEVANT";
}
