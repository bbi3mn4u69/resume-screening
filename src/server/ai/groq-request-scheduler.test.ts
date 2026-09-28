import assert from "node:assert/strict";
import test from "node:test";

type Scheduler = {
  run<T>(operation: () => Promise<T>): Promise<T>;
};

type SchedulerConstructor = new (options: {
  requestsPerMinute: number;
  maxRateLimitRetries: number;
  now: () => number;
  sleep: (milliseconds: number) => Promise<void>;
}) => Scheduler;

const schedulerModule = (await import("./groq-request-scheduler.ts").catch(
  () => ({}),
)) as { GroqRequestScheduler?: SchedulerConstructor };

function createTestScheduler(maxRateLimitRetries = 2) {
  assert.equal(
    typeof schedulerModule.GroqRequestScheduler,
    "function",
    "GroqRequestScheduler must be implemented",
  );
  if (!schedulerModule.GroqRequestScheduler) return;

  let time = 0;
  const waits: number[] = [];
  const scheduler = new schedulerModule.GroqRequestScheduler({
    requestsPerMinute: 30,
    maxRateLimitRetries,
    now: () => time,
    sleep: async (milliseconds) => {
      waits.push(milliseconds);
      time += milliseconds;
    },
  });

  return { scheduler, waits, now: () => time };
}

void test("spaces concurrent Groq requests across the RPM window", async () => {
  const fixture = createTestScheduler();
  if (!fixture) return;
  let calls = 0;

  await Promise.all(
    Array.from({ length: 3 }, () =>
      fixture.scheduler.run(async () => {
        calls += 1;
        return "ok";
      }),
    ),
  );

  assert.equal(calls, 3);
  assert.deepEqual(fixture.waits, [2_000, 2_000]);
});

void test("shares Groq Retry-After cooldowns and retries a rate-limited request", async () => {
  const fixture = createTestScheduler();
  if (!fixture) return;
  const starts: number[] = [];
  let attempts = 0;

  const result = await fixture.scheduler.run(async () => {
    starts.push(fixture.now());
    attempts += 1;
    if (attempts === 1) {
      throw Object.assign(new Error("Too Many Requests"), {
        statusCode: 429,
        responseHeaders: { "retry-after": "3" },
      });
    }
    return "recovered";
  });

  assert.equal(result, "recovered");
  assert.deepEqual(starts, [0, 3_000]);
});

void test("uses Groq's token reset instead of a longer retry delay", async () => {
  const fixture = createTestScheduler();
  if (!fixture) return;
  const starts: number[] = [];
  let attempts = 0;

  await fixture.scheduler.run(async () => {
    starts.push(fixture.now());
    attempts += 1;
    if (attempts === 1) {
      throw Object.assign(new Error("Token rate limit reached"), {
        statusCode: 429,
        responseHeaders: {
          "retry-after": "360",
          "x-ratelimit-remaining-requests": "999",
          "x-ratelimit-reset-tokens": "7.5s",
        },
      });
    }
    return "recovered";
  });

  assert.deepEqual(starts, [0, 7_500]);
});

void test("does not wait through an exhausted daily request allowance", async () => {
  const fixture = createTestScheduler();
  if (!fixture) return;
  let attempts = 0;

  await assert.rejects(
    fixture.scheduler.run(async () => {
      attempts += 1;
      throw Object.assign(new Error("Daily request limit reached"), {
        statusCode: 429,
        responseHeaders: {
          "retry-after": "360",
          "x-ratelimit-remaining-requests": "0",
          "x-ratelimit-reset-requests": "6m",
        },
      });
    }),
    /Daily request limit reached/,
  );

  assert.equal(attempts, 1);
  assert.deepEqual(fixture.waits, []);
});

void test("does not retry failures that are not rate limits", async () => {
  const fixture = createTestScheduler();
  if (!fixture) return;
  let attempts = 0;

  await assert.rejects(
    fixture.scheduler.run(async () => {
      attempts += 1;
      throw Object.assign(new Error("Bad request"), { statusCode: 400 });
    }),
    /Bad request/,
  );

  assert.equal(attempts, 1);
});
