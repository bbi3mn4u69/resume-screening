type SchedulerOptions = {
  requestsPerMinute: number;
  maxRateLimitRetries: number;
  now?: () => number;
  sleep?: (milliseconds: number) => Promise<void>;
};

type RateLimitError = {
  statusCode?: number;
  responseHeaders?: Record<string, string | undefined>;
  lastError?: unknown;
  cause?: unknown;
};

function findRateLimitError(error: unknown): RateLimitError | undefined {
  let current = error;
  for (let depth = 0; depth < 5; depth += 1) {
    if (!current || typeof current !== "object") return;
    const candidate = current as RateLimitError;
    if (candidate.statusCode === 429) return candidate;
    current = candidate.lastError ?? candidate.cause;
  }
}

function parseDurationMilliseconds(value: string | undefined) {
  if (!value) return;
  const units = { ms: 1, s: 1_000, m: 60_000, h: 3_600_000 } as const;
  const matches = [...value.matchAll(/(\d+(?:\.\d+)?)(ms|s|m|h)/gi)];
  if (matches.length === 0) return;
  return matches.reduce((total, match) => {
    const amount = Number(match[1]);
    const unit = match[2]?.toLowerCase() as keyof typeof units;
    return total + amount * units[unit];
  }, 0);
}

function parseRetryAfterMilliseconds(value: string | undefined) {
  if (!value) return;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1_000);

  const date = Date.parse(value);
  return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now());
}

function normalizedHeaders(error: RateLimitError) {
  return Object.fromEntries(
    Object.entries(error.responseHeaders ?? {}).map(([name, value]) => [
      name.toLowerCase(),
      value,
    ]),
  );
}

function getRetryAfterMilliseconds(error: RateLimitError) {
  const headers = normalizedHeaders(error);
  const retryAfter = parseRetryAfterMilliseconds(headers["retry-after"]);
  const tokenReset = parseDurationMilliseconds(
    headers["x-ratelimit-reset-tokens"],
  );

  if (
    headers["x-ratelimit-remaining-requests"] !== "0" &&
    tokenReset !== undefined
  ) {
    return Math.min(retryAfter ?? tokenReset, tokenReset);
  }
  return retryAfter;
}

export class GroqRequestScheduler {
  private readonly intervalMilliseconds: number;
  private readonly maxRateLimitRetries: number;
  private readonly now: () => number;
  private readonly sleep: (milliseconds: number) => Promise<void>;
  private nextStartAt = 0;
  private blockedUntil = 0;
  private scheduling = Promise.resolve();

  constructor(options: SchedulerOptions) {
    this.intervalMilliseconds = 60_000 / options.requestsPerMinute;
    this.maxRateLimitRetries = options.maxRateLimitRetries;
    this.now = options.now ?? Date.now;
    this.sleep =
      options.sleep ??
      ((milliseconds) =>
        new Promise((resolve) => setTimeout(resolve, milliseconds)));
  }

  async run<T>(operation: () => Promise<T>): Promise<T> {
    for (let retry = 0; ; retry += 1) {
      await this.reserveStart();
      try {
        return await operation();
      } catch (error) {
        const rateLimitError = findRateLimitError(error);
        if (!rateLimitError || retry >= this.maxRateLimitRetries) throw error;
        if (
          normalizedHeaders(rateLimitError)[
            "x-ratelimit-remaining-requests"
          ] === "0"
        ) {
          throw error;
        }

        const retryAfter =
          getRetryAfterMilliseconds(rateLimitError) ??
          Math.min(30_000, 1_000 * 2 ** retry);
        this.blockedUntil = Math.max(
          this.blockedUntil,
          this.now() + retryAfter,
        );
      }
    }
  }

  private async reserveStart() {
    const turn = this.scheduling.then(async () => {
      while (true) {
        const startAt = Math.max(this.nextStartAt, this.blockedUntil);
        const wait = startAt - this.now();
        if (wait > 0) {
          await this.sleep(wait);
          continue;
        }
        this.nextStartAt = this.now() + this.intervalMilliseconds;
        return;
      }
    });
    this.scheduling = turn.catch(() => undefined);
    await turn;
  }
}

export const groqRequestScheduler = new GroqRequestScheduler({
  requestsPerMinute: 30,
  maxRateLimitRetries: 5,
});
