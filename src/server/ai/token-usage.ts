type ProviderTokenUsage = {
  inputTokens?: number;
  inputTokenDetails?: {
    noCacheTokens?: number;
    cacheReadTokens?: number;
  };
  outputTokens?: number;
};

export type StoredTokenUsage = {
  inputTokens: number;
  cachedInputTokens: number;
  uncachedInputTokens: number;
  outputTokens: number;
  requestCount: number;
};

export function normalizeTokenUsage(
  usage: ProviderTokenUsage,
): StoredTokenUsage {
  const inputTokens = Math.max(0, usage.inputTokens ?? 0);
  const cachedInputTokens = Math.max(
    0,
    usage.inputTokenDetails?.cacheReadTokens ?? 0,
  );
  const uncachedInputTokens = Math.max(
    0,
    usage.inputTokenDetails?.noCacheTokens ?? inputTokens - cachedInputTokens,
  );

  return {
    inputTokens,
    cachedInputTokens,
    uncachedInputTokens,
    outputTokens: Math.max(0, usage.outputTokens ?? 0),
    requestCount: 1,
  };
}
