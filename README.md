# ClearScreen — AI-Assisted Resume Screening

Student name: `Nguyen Quang Huy Pham`

Student ID: `s4181834`

ClearScreen is a single-page proof of concept for evidence-led resume screening. It compares a fixed corpus of resumes with a real job advertisement, creates a structured job profile, shortlists relevant resumes, and uses Groq to produce traceable candidate-to-job assessments.

The application is **decision support only**. It does not make hiring, rejection, interview, salary, or employment decisions. Every result is designed to be reviewed by a qualified person.

## Table of contents

- [Purpose](#purpose)
- [What the application does](#what-the-application-does)
- [Feature overview](#feature-overview)
- [End-to-end screening workflow](#end-to-end-screening-workflow)
- [Token-cost reduction strategy](#token-cost-reduction-strategy)
- [Scoring and classification](#scoring-and-classification)
- [Responsible AI and fairness](#responsible-ai-and-fairness)
- [Resume dataset](#resume-dataset)
- [Resume application viewer](#resume-application-viewer)
- [History and traceability](#history-and-traceability)
- [Data visualisation](#data-visualisation)
- [Architecture](#architecture)
- [Technology stack](#technology-stack)
- [Database design](#database-design)
- [API surface](#api-surface)
- [Groq and structured output](#groq-and-structured-output)
- [Local setup](#local-setup)
- [Railway PostgreSQL setup](#railway-postgresql-setup)
- [Environment variables](#environment-variables)
- [Dataset import](#dataset-import)
- [Development commands](#development-commands)
- [Testing and verification](#testing-and-verification)
- [Project structure](#project-structure)
- [Operational behaviour](#operational-behaviour)
- [Security and privacy](#security-and-privacy)
- [Known limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)
- [Future improvements](#future-improvements)

## Purpose

Manual first-pass resume review is repetitive and difficult to apply consistently across a large applicant pool. ClearScreen demonstrates how an AI-assisted workflow can help an HR professional organise evidence without delegating the final employment decision to a model.

The proof of concept has four main goals:

1. Extract explicit requirements from a real job advertisement.
2. Compare those requirements with evidence found in resumes.
3. Present explainable scores, gaps, confidence, and supporting evidence.
4. Preserve screening runs so a human can revisit what was assessed.

ClearScreen intentionally avoids applicant tracking, authentication, interviews, messaging, and automated hiring decisions. Its scope is the initial resume-to-job evidence comparison.

## What the application does

An HR user can:

1. Browse and search the fixed resume dataset stored in PostgreSQL.
2. Filter the library by the source dataset category.
3. Open the original formatted resume application.
4. Enter a real job title and paste the complete job advertisement.
5. Optionally restrict screening to a matching dataset job type before any AI candidate calls.
6. Start a screening run using the configured Groq model.
7. Review match counts, charts, ranked candidates, confidence, and evidence.
8. Filter results by match class, sort by fit score, and search by resume ID.
9. Open a screened resume beside its AI-generated evidence assessment.
10. Reopen previously processed job advertisements from the history view.

The browser never receives the Groq API key or direct database credentials. Screening and persistence happen on the server.

## Feature overview

### Fixed resume library

- Uses `resume-data-set/Resume/Resume.csv` as the default source.
- Stores the dataset in PostgreSQL rather than requiring repeated browser uploads.
- Displays the number of imported resumes.
- Supports server-side pagination with 12 resumes per page.
- Supports case-insensitive search across resume IDs and resume text.
- Supports source-category filtering.
- Visualises category counts with D3.js.
- Retains the original HTML representation for faithful resume viewing.

### Real job advertisement input

- Requires a job title between 2 and 160 characters.
- Requires a meaningful job description between 80 and 30,000 characters.
- Provides a dataset job-type selector with live resume counts and an `All job types` fallback.
- Accepts responsibilities, required skills, preferred skills, experience, education, certifications, technologies, and domain knowledge.
- Disables screening if Groq is not configured or the base dataset is empty.

### Multi-stage screening

- Extracts a structured job profile from the supplied advertisement.
- Filters the PostgreSQL resume pool by the reviewer-selected dataset job type.
- Ranks the selected job-type pool with a deterministic lexical pre-screen.
- Excludes zero-evidence resumes locally while retaining a minimum 10-candidate recall floor.
- Sends only the highest-ranked bounded set to Groq.
- Compresses every selected resume to at most 2,000 job-relevant characters.
- Caps candidate-assessment output at 500 tokens.
- Evaluates candidates concurrently with a configurable concurrency limit.
- Persists progress, token-efficiency measurements, and failures for traceability.
- Converts AI fit scores into fixed labels in application code.

### Explainable results

- Fit score from 0 to 100.
- Deterministic match label.
- Confidence from 0 to 1, displayed as a percentage.
- Concise screening summary.
- Matched requirements.
- Requirements or evidence gaps.
- Supporting resume evidence.
- Human-review flag.
- Comparison between lexical pre-screen and AI score.

### Screening history

- Stores the original job title and full job description.
- Stores the extracted job profile.
- Stores the model name and prompt version.
- Stores one evaluation record per screened resume.
- Lists the 30 most recent screening runs.
- Allows a user to reopen results without calling Groq again.

## End-to-end screening workflow

```mermaid
flowchart TD
    A[Resume.csv] --> B[Import and validate rows]
    B --> C[(Railway PostgreSQL)]
    D[Real job title and description] --> E[Groq job-profile extraction]
    E --> F[Validated structured job profile]
    Q[Reviewer selects dataset job type] --> G[Filter sanitized resumes in PostgreSQL]
    C --> G
    F --> H[Deterministic lexical pre-screen]
    G --> H
    H --> I[Exclude zero-evidence resumes with a 10-candidate floor]
    I --> J[Select up to configured maximum]
    J --> K[Extract relevant evidence up to 2,000 characters]
    K --> L[Concurrent Groq evidence assessments]
    F --> L
    L --> M[Zod validation]
    M --> N[Application-owned match thresholds]
    N --> O[(Persist run, efficiency metrics, and evaluations)]
    O --> P[Live progress, dashboard, resume viewer, and history]
```

### 1. Job-profile extraction

The server sends the real job title and description to Groq. The model must return a structured profile containing:

- `title`
- `mustHaveSkills`
- `niceToHaveSkills`
- `responsibilities`
- `experienceRequirements`
- `educationRequirements`
- `certifications`
- `domainKeywords`

Every field is required by the Zod schema. When the advertisement does not provide evidence for an array field, the model is instructed to return an empty array instead of inventing requirements.

The extraction prompt preserves distinctions such as required, preferred, desirable, and nice-to-have. Promotional phrases such as “rockstar” are excluded unless connected to a measurable responsibility.

### 2. Dataset job-type filter and deterministic lexical pre-screen

Running an AI request for every resume in a large corpus would be slower and more expensive. ClearScreen first filters PostgreSQL by the optional source dataset job type. It then calculates a simple deterministic overlap score across that smaller pool. `All job types` skips only the category filter and is useful when a role is cross-functional or the appropriate category is unclear.

The term set contains:

- must-have skills,
- nice-to-have skills, and
- domain keywords.

Terms are trimmed, lowercased, deduplicated, and checked against the sanitized resume text. The score is:

```text
matched unique terms / total unique terms × 100
```

The resumes are sorted by this score, with resume ID used as a stable tie-breaker. Resumes with a score above zero are eligible for AI review. ClearScreen retains at least 10 top-ranked resumes even when fewer than 10 score above zero; this is a conservative recall floor that reduces the chance that an imperfect lexical filter removes every potentially transferable candidate. The final set cannot exceed `MAX_RESUMES_PER_RUN`.

This score is a cost-control shortlist signal, not the final classification. It uses literal substring matching and should not be treated as semantic proof of competence.

### 3. Local evidence compression

Before a selected resume is sent to Groq, ClearScreen splits its sanitized text into bounded fragments and ranks them locally. Fragments receive more weight when they contain terms from must-have skills, core responsibilities, and experience requirements; education, certifications, preferred skills, and domain terms receive progressively lower weights.

The highest-scoring fragments are restored to their original document order and assembled into an evidence excerpt capped at 2,000 characters. If the complete resume is already below the cap, it is left intact. If no fragment matches, the beginning of the sanitized resume is used as a conservative fallback.

This compression substantially reduces prompt size, but it can omit indirectly related or transferable evidence. The v5 prompt therefore tells Groq that it may be receiving selected excerpts and requires human review when omitted context makes a critical requirement ambiguous.

### 4. Groq evidence assessment

Each shortlisted resume is evaluated against the extracted job profile. The model receives the locally selected sanitized evidence excerpt, not the source category, raw resume, or HTML document.

The assessment schema requires:

```ts
{
  fitScore: number;                 // integer, 0–100
  confidence: number;               // 0–1
  matchedRequirements: string[];    // maximum 6
  missingRequirements: string[];    // maximum 6
  supportingEvidence: string[];     // maximum 6
  summary: string;                  // maximum 800 characters
  needsHumanReview: boolean;
}
```

The prompt instructs the model to use explicit job-related evidence only, distinguish missing evidence from an actual absence of ability, and avoid subjective or hiring-decision language.

### 5. Application-owned classification

Groq returns a numeric fit score but does not choose the displayed match class. ClearScreen derives the label with fixed TypeScript thresholds. This keeps the category boundary visible, deterministic, and testable.

### 6. Persistence, live progress, and presentation

The job, screening run, source-corpus count, shortlist size, original/filtered character counts, pre-screen score, AI assessment, derived label, errors, and human-review state are stored in PostgreSQL.

Run preparation and AI evaluation are separate tRPC mutations. Once preparation returns a run ID, the browser polls the stored run while Groq evaluations continue. The progress UI displays the genuine processed/total count, full dataset size, selected job-type pool, shortlist size, and measured input reduction rather than a simulated timer.

## Token-cost reduction strategy

ClearScreen reduces Groq usage at five layers before and during candidate assessment.

### 1. Filter by dataset job type

Before local relevance scoring, the reviewer can narrow the stored corpus using the job categories already supplied by `Resume.csv`. The selector includes each category and its resume count so the cost impact is visible before submission. Choosing `All job types` preserves the complete corpus for cross-functional or ambiguous roles.

This filter is applied in PostgreSQL. Category labels are used only to select the candidate pool and are not included in Groq prompts. The run stores both the full dataset count and the post-category pool count for an auditable funnel.

### 2. Reduce the number of candidate calls

The deterministic pre-screen runs over every stored resume without using an LLM. Candidates with no explicit overlap are removed, subject to a minimum 10-candidate recall floor. `MAX_RESUMES_PER_RUN` remains a hard upper bound.

This is normally the largest saving because every excluded candidate avoids an entire model request, including its system prompt, job profile, resume evidence, and generated response.

### 3. Reduce candidate input per call

For each shortlisted resume, local weighted fragment ranking keeps the text most connected to the job profile. The AI evidence input is capped at 2,000 characters instead of the earlier 30,000-character allowance.

The repeated candidate system prompt was also condensed in v5 while preserving its evidence, fairness, scoring, confidence, human-review, and structured-output rules. Because that prompt is sent for every candidate, removing duplicated prose saves input on every request.

The extracted job profile is canonicalized once: whitespace is normalized, duplicate requirements are removed without changing their first-seen order, and fields are serialized in a fixed compact order. Every assessment request places the unchanged system prompt, structured-output schema, and canonical job profile before the candidate-specific evidence. This exact-prefix layout allows Groq's automatic prompt cache to reuse the repeated portion while keeping each candidate evaluation independent.

### 4. Reduce output allowance

The candidate schema needs only a score, confidence, three arrays capped at four short items, a summary capped at 400 characters, and a review flag. Candidate output is therefore capped at 500 tokens. Job-profile extraction has a separate 1,800-token cap because its schema can contain more requirement arrays.

These are maximum allowances, not guaranteed usage. A valid shorter response consumes fewer output tokens.

### 5. Measure and expose the reduction

Each new run stores:

- total resumes in the dataset,
- selected dataset job type and the number of source resumes remaining after that filter,
- resumes selected for Groq,
- total characters across the selected full sanitized resumes, and
- total characters after evidence compression,
- provider-reported input and output tokens,
- cached and uncached input tokens, and
- the number of successful AI requests represented by those totals.

The UI keeps the approximate resume-text estimate for comparing local compression, then separately shows authoritative provider totals and the calculated prompt-cache hit rate. Provider usage includes the system prompt, structured schema, job profile, and evidence rather than only resume characters.

### Recall and fairness tradeoff

Aggressive filtering can save money while hiding transferable or synonym-based evidence. A wrong dataset job type can exclude a relevant application before text ranking, so the UI keeps an `All job types` option and shows every stage of the funnel. ClearScreen also keeps the local algorithm deterministic and inspectable, preserves a minimum candidate floor inside the selected pool, instructs Groq that it may receive excerpts, and requires review of the original resume.

Possible future refinements include BM25 or TF-IDF ranking, synonym dictionaries reviewed by domain experts, locally hosted embeddings, adaptive excerpt budgets based on job complexity, and offline evaluation of shortlist recall. These should be benchmarked before replacing the current transparent rules. Using another hosted LLM to summarise every resume was deliberately avoided because it would move rather than remove token cost.

## Scoring and classification

### Fit score

`fitScore` measures resume-to-job evidence alignment. It is not a probability of success and is not a recommendation to hire.

|  Score | Derived label    | Interpretation                                                               |
| -----: | ---------------- | ---------------------------------------------------------------------------- |
| 80–100 | `HIGH_MATCH`     | Strong evidence for most or all critical requirements                        |
|  60–79 | `MODERATE_MATCH` | Evidence for several important requirements with meaningful gaps             |
|  35–59 | `LOW_MATCH`      | Some connection to the role, with limited evidence for critical requirements |
|   0–34 | `NOT_RELEVANT`   | Little or no meaningful evidence connected to the core role                  |

The boundaries are defined in `src/server/screening/labels.ts` and covered by automated boundary tests.

### Confidence

Confidence describes the quality and completeness of the evidence available to the model. It does not describe confidence in the candidate’s ability.

The prompt uses these interpretive bands:

| Confidence | Interpretation                                                   |
| ---------: | ---------------------------------------------------------------- |
|  0.80–1.00 | Evidence is clear, detailed, and consistent                      |
|  0.50–0.79 | Some evidence is indirect, incomplete, or open to interpretation |
|  0.00–0.49 | Evidence is limited, ambiguous, contradictory, or insufficient   |

ClearScreen applies an additional conservative rule: an evaluation is flagged for human review when confidence is below `0.65`, even if the model did not set its own review flag.

### Pre-screen score versus fit score

These values serve different purposes:

| Value            | Generated by                   | Purpose                                                          |
| ---------------- | ------------------------------ | ---------------------------------------------------------------- |
| Pre-screen score | Deterministic application code | Select the bounded candidate set sent to Groq                    |
| Fit score        | Groq structured assessment     | Summarise evidence alignment against the full structured profile |
| Match label      | Deterministic application code | Convert fit score into one of four fixed categories              |

The D3 scatter plot shows both scores so reviewers can identify disagreement between literal keyword overlap and the richer AI assessment.

## Responsible AI and fairness

Responsible AI controls exist at several layers.

### Data minimisation before model evaluation

The dataset importer creates both a raw and sanitized resume representation. Before a resume is sent to Groq, common patterns are replaced:

- email addresses become `[EMAIL REDACTED]`,
- URLs become `[URL REDACTED]`, and
- phone numbers become `[PHONE REDACTED]`.

The original raw text and HTML remain in PostgreSQL so an authorised human reviewer can inspect the source application.

### Protected-characteristic instructions

The screening prompt prohibits using or inferring characteristics including:

- name,
- age or date of birth,
- gender or gender identity,
- race or ethnicity,
- religion,
- disability or medical information,
- marital, family, or parental status,
- sexual orientation,
- political beliefs,
- photographs or physical appearance,
- nationality or country of origin,
- residential address or suburb, and
- socioeconomic background.

The model is instructed not to use these attributes as proxies for capability, communication, culture fit, or likely performance.

### Evidence discipline

The prompt requires conclusions to be traceable to resume evidence. It instructs the model not to:

- invent qualifications, employers, responsibilities, dates, or achievements,
- assume a related technology proves knowledge of another technology,
- infer that a candidate lacks a skill because it is not mentioned,
- infer seniority solely from a job title,
- exaggerate indirect evidence, or
- treat keyword frequency as proof of competence.

When evidence is absent, the intended language is “not evidenced,” not “cannot do” or “does not have.”

### Human oversight

The interface repeatedly identifies the system as decision support and displays a human-review requirement. Review is flagged when confidence is low, evidence is ambiguous, information is contradictory, important information is missing, or the model explicitly requests review.

### Important limitation

Prompt instructions and pattern-based redaction reduce risk but do not prove fairness. Names, addresses, institutions, employment history, and other proxy information may still remain in resume text. A production system would require stronger de-identification, access controls, bias testing, legal review, monitoring, and a documented appeal process.

## Resume dataset

The application uses a fixed base corpus instead of an end-user CSV upload workflow.

Default path:

```text
resume-data-set/Resume/Resume.csv
```

Expected columns:

| CSV column    | Stored field       | Purpose                                                          |
| ------------- | ------------------ | ---------------------------------------------------------------- |
| `ID`          | `externalId`       | Stable candidate identifier                                      |
| `Resume_str`  | `rawText`          | Plain-text source used for browsing and resume review fallback   |
| `Resume_html` | `resumeHtml`       | Original formatted application shown in the viewer               |
| `Category`    | `originalCategory` | Source metadata used only for browsing and dataset visualisation |

Rows without both an ID and resume text are skipped. Whitespace in plain text is normalized. Records are imported in batches of 100.

The unique database constraint on `(datasetName, externalId)` and Prisma’s `skipDuplicates` option make repeated seed runs idempotent: existing rows are not duplicated.

### Category handling

The source category is useful for dataset exploration but must not become the screening answer.

ClearScreen therefore:

- stores the category as traceability metadata,
- shows it in the resume library and viewer,
- uses it in the D3 dataset-distribution chart,
- does not include it in the lexical pre-screen,
- does not include it in the Groq evaluation prompt, and
- does not copy it into the AI-derived match label.

## Resume application viewer

The resume viewer is a wide, responsive shadcn sheet that opens from two locations:

1. Clicking a resume row in the base library.
2. Clicking the eye icon for a screened candidate.

The library view displays the original resume application. A screened-candidate view adds a **Screening evidence** tab containing:

- fit score,
- confidence,
- lexical pre-screen score,
- model summary,
- matched requirements,
- evidence gaps, and
- supporting evidence.

Original dataset HTML is rendered with `srcDoc` inside a sandboxed iframe. The generated document applies a restrictive Content Security Policy:

```text
default-src 'none'; style-src 'unsafe-inline'; img-src data:
```

This prevents the resume document from running scripts, navigating the application, or loading arbitrary remote resources. If no HTML representation exists, the viewer displays the stored plain text in a readable document layout.

## History and traceability

The **Job history** tab lists the 30 most recent screening runs. Each item includes:

- job title,
- job-description preview,
- run status,
- creation date,
- processed and total candidate counts,
- failed-evaluation count,
- high-match count, and
- average fit score.

Opening a history item loads the saved evaluation data. It does not rerun the model, which supports reproducibility and avoids unnecessary API cost.

Each run records the model name and prompt version. The current prompt constant is `v5`; future prompt changes can therefore be distinguished from older stored runs.

## Data visualisation

ClearScreen uses D3.js for two groups of visualisations.

### Dataset category distribution

A horizontal bar chart shows the number of resumes stored for each source category. It provides immediate visibility into the composition and imbalance of the imported corpus.

### Screening analytics

The results view contains:

- a match-distribution chart for High, Moderate, Low, and Not Relevant results; and
- a scatter plot comparing deterministic lexical pre-screen scores with Groq fit scores.

The charts supplement the result table; they do not replace candidate-level evidence review.

## Architecture

ClearScreen follows a compact T3-style architecture.

```mermaid
flowchart LR
    UI[Next.js + React UI] -->|typed queries and mutations| TRPC[tRPC router]
    TRPC --> SCREEN[Screening orchestration]
    TRPC --> PRISMA[Prisma ORM]
    SCREEN --> AI[Vercel AI SDK]
    AI --> GROQ[Groq API]
    PRISMA --> PG[(Railway PostgreSQL)]
    PG --> TRPC
    TRPC --> UI
```

### Browser layer

- Renders the single-page screening workspace.
- Uses TanStack Query through tRPC React hooks.
- Handles form state, filters, sorting, pagination, tabs, dialogs, and loading states.
- Renders D3 charts and the isolated resume viewer.

### API layer

- Exposes one `screening` tRPC router.
- Validates all procedure inputs with Zod.
- Coordinates database reads, job-profile extraction, candidate selection, evaluation, and persistence.
- Keeps credentials and model calls on the server.

### AI layer

- Uses the Vercel AI SDK and `@ai-sdk/groq` provider.
- Defines strict Zod schemas for job profiles and candidate assessments.
- Uses temperature `0` for more deterministic output.
- Caps job-profile output at 1,800 tokens and candidate-assessment output at 500 tokens.
- Limits each request to 60 seconds.
- Requests strict structured output when supported.
- Retries structured-output validation failures with a JSON fallback path.

### Persistence layer

- Uses Prisma ORM.
- Uses PostgreSQL hosted on Railway.
- Stores source resumes, jobs, screening runs, and individual evaluations.

## Technology stack

| Area            | Technology                           |
| --------------- | ------------------------------------ |
| Framework       | Next.js 15 App Router                |
| UI              | React 19, TypeScript, Tailwind CSS 4 |
| Components      | shadcn/ui using Base UI primitives   |
| Typography      | Inter variable font                  |
| API             | tRPC 11                              |
| Client data     | TanStack Query 5                     |
| Validation      | Zod 3                                |
| Database        | PostgreSQL on Railway                |
| ORM             | Prisma 6                             |
| AI              | Vercel AI SDK 7 with `@ai-sdk/groq`  |
| Default model   | `openai/gpt-oss-20b`                 |
| Visualisation   | D3.js 7                              |
| CSV parsing     | Papa Parse                           |
| Icons           | Lucide React                         |
| Package manager | pnpm 9                               |

## Database design

```mermaid
erDiagram
    Job ||--o{ ScreeningRun : has
    ScreeningRun ||--o{ ResumeEvaluation : contains
    Resume ||--o{ ResumeEvaluation : receives

    Resume {
        string id PK
        string externalId
        string sourceFileName
        int sourceRow
        string originalCategory
        string datasetName
        text rawText
        text sanitizedText
        text resumeHtml
        datetime createdAt
        datetime updatedAt
    }

    Job {
        string id PK
        string title
        text description
        text extractedProfileJson
        datetime createdAt
        datetime updatedAt
    }

    ScreeningRun {
        string id PK
        string jobId FK
        string status
        string modelName
        string promptVersion
        int totalCandidates
        int processedCount
        int failedCount
        string datasetCategory
        int datasetCandidates
        int sourceCandidates
        int originalInputCharacters
        int filteredInputCharacters
        int inputTokens
        int cachedInputTokens
        int uncachedInputTokens
        int outputTokens
        int aiRequestCount
        datetime startedAt
        datetime completedAt
        datetime createdAt
    }

    ResumeEvaluation {
        string id PK
        string runId FK
        string resumeId FK
        string status
        int preScreenScore
        int fitScore
        string matchLabel
        float confidence
        text matchedRequirementsJson
        text missingRequirementsJson
        text supportingEvidenceJson
        text summary
        boolean needsHumanReview
        text errorMessage
    }
```

### Deletion behaviour

- Deleting a `Job` cascades to its screening runs.
- Deleting a `ScreeningRun` cascades to its evaluations.
- Deleting a `Resume` cascades to its evaluations.

The application UI does not currently expose destructive delete operations.

## API surface

All procedures are under the `screening` tRPC namespace.

### `screening.config`

Returns whether Groq is configured, the model name, maximum resumes per run, imported resume count, and fixed match thresholds.

### `screening.resumeCatalog`

Input:

```ts
{
  search: string;
  category: string | null;
  page: number;
}
```

Returns paginated resume summaries and all stored category counts.

### `screening.resumeDetail`

Accepts a resume database ID and returns the original ID, category, source metadata, plain text, and stored HTML for the viewer.

### `screening.createRun`

Input:

```ts
{
  jobTitle: string;
  jobDescription: string;
  datasetCategory: string | null;
}
```

This mutation validates configuration, extracts the profile, filters resumes by the optional dataset job type in PostgreSQL, ranks the remaining pool, measures evidence compression, creates the run and pending evaluation records, and immediately returns the run ID and efficiency totals.

### `screening.processRun`

Accepts a prepared run ID. It loads pending evaluations, rebuilds each deterministic evidence excerpt, evaluates candidates with bounded concurrency, persists candidate results and progress, and finalises the run status. Keeping processing separate from preparation allows the browser to poll real progress by run ID.

### `screening.run`

Accepts an optional run ID. If omitted, it returns the most recent run. The response contains job information, parsed job profile, run metadata, and ordered candidate evaluations.

### `screening.history`

Returns summary information for the 30 newest runs, including average score and high-match count.

## Groq and structured output

The server-only Groq provider is created with:

```ts
createGroq({ apiKey: env.GROQ_API_KEY })(env.GROQ_MODEL);
```

Current generation settings:

```text
temperature: 0
maxOutputTokens: 1800 for job profiles; 1000 for candidate assessments
maxRetries: 2
timeout: 60 seconds
reasoningFormat: hidden
reasoningEffort: low
structuredOutputs: true
strictJsonSchema: true
```

### JSON validation fallback

Some model responses can fail strict JSON generation or provider-side schema validation. ClearScreen detects errors containing `json_validate_failed`, `failed to validate json`, or `failed to generate json`.

For those specific failures, it retries the same schema-backed generation with Groq strict structured output disabled. The Vercel AI SDK still parses the response through `Output.object`, and the application validates the final value with Zod.

Other errors are not silently swallowed. Candidate-level failures are persisted with `FAILED` status and an error-message excerpt, while the rest of the run continues.

### Run statuses

| Status       | Meaning                                                   |
| ------------ | --------------------------------------------------------- |
| `PROCESSING` | Candidate evaluations are underway                        |
| `COMPLETED`  | Every shortlisted evaluation completed successfully       |
| `PARTIAL`    | At least one evaluation succeeded and at least one failed |
| `FAILED`     | Every shortlisted evaluation failed                       |

## Local setup

### Prerequisites

- Node.js 20 or newer
- pnpm 9
- A PostgreSQL database
- A Groq API key for AI screening
- The resume CSV dataset for initial import

### 1. Install dependencies

```bash
pnpm install
```

### 2. Create the local environment file

```bash
cp .env.example .env
```

Update `.env` with the PostgreSQL connection string and Groq key.

### 3. Apply database migrations

For an existing database or deployment:

```bash
pnpm db:migrate
```

For local schema development:

```bash
pnpm db:generate
```

Despite its script name, `db:generate` currently runs `prisma migrate dev`, which may create or apply development migrations. Use it only in a development environment.

### 4. Import the base resume dataset

```bash
pnpm db:seed-resumes
```

### 5. Start the application

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Next.js may select another port if port 3000 is occupied.

## Railway PostgreSQL setup

The application is configured for PostgreSQL and works with a Railway PostgreSQL service.

1. Create or open a Railway project.
2. Add a PostgreSQL service.
3. Copy its connection string.
4. Set `DATABASE_URL` in the environment where ClearScreen runs.
5. Run `pnpm db:migrate` against that database.
6. Run `pnpm db:seed-resumes` once to import the base corpus.

For a local application connecting to Railway, use the externally reachable connection URL. For an application deployed inside the same Railway project, use Railway’s private/internal connection variables when available.

## Environment variables

```env
DATABASE_URL="postgresql://postgres:password@host:5432/railway"
GROQ_API_KEY=""
GROQ_MODEL="openai/gpt-oss-20b"
MAX_RESUMES_PER_RUN="25"
GROQ_CONCURRENCY="3"
```

| Variable              |          Required | Default              | Description                                                |
| --------------------- | ----------------: | -------------------- | ---------------------------------------------------------- |
| `DATABASE_URL`        |               Yes | None                 | PostgreSQL connection string used by Prisma                |
| `GROQ_API_KEY`        |     For screening | None                 | Server-only API key; browsing remains available without it |
| `GROQ_MODEL`          |                No | `openai/gpt-oss-20b` | Groq model used for extraction and assessment              |
| `MAX_RESUMES_PER_RUN` |                No | `25`                 | Maximum shortlisted resumes sent to Groq                   |
| `GROQ_CONCURRENCY`    |                No | `3`                  | Concurrent evaluations; allowed range 1–10                 |
| `NODE_ENV`            | Usually automatic | `development`        | Runtime environment                                        |
| `SKIP_ENV_VALIDATION` |                No | unset                | Skips environment validation for controlled builds         |

Never commit a real `.env` file or Groq key. No environment variables are exposed through a `NEXT_PUBLIC_` name.

## Dataset import

Default import:

```bash
pnpm db:seed-resumes
```

Import from another path:

```bash
pnpm db:seed-resumes /absolute/path/to/Resume.csv
```

The alternative file must provide `ID`, `Resume_str`, `Resume_html`, and `Category`.

The command prints a summary such as:

```json
{
  "dataset": "resume-data-set-v1",
  "csvRows": 2484,
  "validRows": 2483,
  "skippedRows": 1,
  "inserted": 2483,
  "stored": 2483
}
```

Exact counts depend on the source file and existing records. On a repeated run, `inserted` may be `0` while `stored` remains unchanged.

## Development commands

| Command                | Purpose                               |
| ---------------------- | ------------------------------------- |
| `pnpm dev`             | Start Next.js with Turbopack          |
| `pnpm build`           | Create an optimized production build  |
| `pnpm start`           | Start a built production server       |
| `pnpm preview`         | Build and start the production server |
| `pnpm test`            | Run the Node test suite               |
| `pnpm typecheck`       | Run TypeScript without emitting files |
| `pnpm lint`            | Run ESLint                            |
| `pnpm check`           | Run ESLint and TypeScript             |
| `pnpm format:check`    | Check formatting                      |
| `pnpm format:write`    | Format supported source files         |
| `pnpm db:migrate`      | Apply existing Prisma migrations      |
| `pnpm db:generate`     | Run `prisma migrate dev`              |
| `pnpm db:push`         | Push schema without a migration       |
| `pnpm db:seed-resumes` | Import the base resume CSV            |
| `pnpm db:studio`       | Open Prisma Studio                    |

## Testing and verification

Run before deployment:

```bash
pnpm test
pnpm check
pnpm build
```

Automated tests cover match-label boundaries, invalid scores, contact redaction, CSV helpers, category summaries, Zod schemas, lexical shortlisting, prompt/schema consistency, structured-output fallback, and sandboxed resume-document construction.

Recommended manual verification:

1. Confirm the dataset count appears.
2. Search for a known resume ID and filter by category.
3. Open a library resume and verify formatted content.
4. Submit a real job advertisement.
5. Verify result sorting, searching, and match filtering.
6. Open a screened candidate with the eye action.
7. Switch between **Resume** and **Screening evidence**.
8. Open **Job history** and revisit the run.
9. Confirm no Groq key or database URL appears in browser data.

## Project structure

```text
.
├── prisma/
│   ├── migrations/                 # PostgreSQL migrations
│   └── schema.prisma               # Database models
├── resume-data-set/Resume/Resume.csv
├── scripts/
│   └── import-resume-dataset.mjs   # Dataset importer
├── src/
│   ├── app/                        # Single Next.js route and layout
│   ├── components/
│   │   ├── d3-charts.tsx           # D3 visualisations
│   │   ├── screening-workspace.tsx # Main UI and resume viewer
│   │   └── ui/                     # shadcn components
│   ├── lib/
│   │   ├── csv.ts                  # CSV helpers
│   │   └── resume-document.ts      # Isolated resume document
│   ├── server/
│   │   ├── ai/                     # Prompts, schemas, Groq calls, fallback
│   │   ├── api/routers/screening.ts
│   │   ├── screening/              # Labels, shortlisting, tests
│   │   └── db.ts                   # Prisma client
│   ├── styles/globals.css
│   └── env.js
├── .env.example
├── components.json
├── package.json
└── README.md
```

## Operational behaviour

### Concurrency

Candidate evaluations use a shared work queue. Worker count is the smaller of `GROQ_CONCURRENCY` and the number of shortlisted resumes. All job-profile and candidate calls then pass through one Groq scheduler that starts requests at most 30 times per minute.

The scheduler disables the AI SDK's independent automatic retries. When Groq returns HTTP `429` while daily requests remain available, it prefers the shorter `x-ratelimit-reset-tokens` clock over a longer generic `Retry-After`, pauses every worker through one shared token cooldown, and retries the affected request up to five times. This prevents retry bursts without leaving usable minute-level token capacity idle. If `x-ratelimit-remaining-requests` is zero, the run fails immediately instead of sleeping through a long daily-quota reset.

Groq enforces request and token limits independently. The scheduler can use the 30 RPM allowance, but it cannot make an 8,000 TPM allowance process more than 8,000 uncached input and output tokens per minute. When the token ceiling is reached, the provider cooldown determines the fastest safe continuation.

The free-tier default sends the top 25 locally ranked candidates, with 2,000 evidence characters and at most 500 output tokens each. This is sized toward the requested five-minute operating window without pretending that 100 full AI assessments can fit inside five minutes of an 8,000 TPM allowance. Set `MAX_RESUMES_PER_RUN` higher when broader coverage matters more than latency.

### Cost and latency controls

- The corpus is narrowed before AI evaluation.
- An optional dataset job-type filter runs in PostgreSQL before text ranking.
- Zero-evidence resumes are excluded after preserving a 10-candidate recall floor.
- `MAX_RESUMES_PER_RUN` bounds candidate calls.
- Candidate resume evidence is capped at 2,000 characters.
- The repeated v5 candidate system prompt is compacted to remove redundant instructions.
- Candidate output is capped at 500 tokens; job-profile output is capped at 1,800.
- Requests time out after 60 seconds.
- History views reuse stored results.
- Each run stores measured before/after input characters plus provider-reported total input, cached input, uncached input, output, and successful request counts.

One run normally requires one job-profile request plus one assessment request for each shortlisted resume, excluding provider retries and the JSON fallback.

### Failure isolation

When one candidate fails, its evaluation becomes `FAILED`, a shortened error is stored, it is flagged for human review, the failure count increases, and other candidates continue. If job-profile extraction fails, no run is created because there is no validated profile.

### Current request lifecycle

`createRun` validates the dataset job-type pool, performs profile extraction and local preparation, then returns the run ID. The browser starts `processRun` and polls `screening.run` every 1.2 seconds while the run is active. The progress card therefore reflects persisted candidate completions. It also shows full dataset size, job-type pool size, shortlisted candidates, and measured input reduction.

The resume-compression comparison remains an estimate based on approximately four characters per token. The second metrics row is populated from Groq usage returned through the AI SDK and is the authoritative measurement for successful requests. Historical runs created before the provider-token migration show only the estimate.

## Security and privacy

### Implemented safeguards

- Groq calls are in a `server-only` module.
- `GROQ_API_KEY` and `DATABASE_URL` remain server-side.
- tRPC inputs and model outputs are validated with Zod.
- Common contact information is redacted before AI evaluation.
- Source category is withheld from assessment.
- Resume HTML uses a sandboxed iframe and restrictive CSP.
- Resume HTML is not injected with React’s `dangerouslySetInnerHTML`.

### PoC security boundary

The tRPC procedures are public and the app has no authentication or authorisation. Anyone who can reach a deployment may be able to browse resumes and screening history.

Do not deploy this PoC with real sensitive applicant data on a public endpoint. A production version needs authentication, role-based access, tenant isolation, audit logging, rate limiting, retention controls, encryption review, secrets rotation, and legal/privacy governance.

## Known limitations

- This is not an applicant tracking system.
- There is no authentication or role-based access control.
- Dataset import is command-line based, not a browser upload.
- Only the configured top-N shortlist receives AI assessment.
- Literal substring shortlisting may miss synonyms and transferable experience.
- Groq output can vary even with temperature zero.
- Prompt instructions cannot guarantee freedom from bias or hallucination.
- Contact redaction does not fully de-identify a resume.
- Progress is polling-based rather than streamed and depends on the browser keeping the processing request active.
- There is no cancel, pause, or per-candidate retry action.
- Evidence arrays are stored as serialized strings, not PostgreSQL JSON columns.
- No automated fairness or adverse-impact analysis is included.
- The viewer displays dataset HTML or text, not an original PDF/DOCX file.

## Troubleshooting

### Database is unreachable

Check that:

1. `DATABASE_URL` exists in `.env` without accidental whitespace.
2. Host, port, username, password, and database name are correct.
3. Railway PostgreSQL is running.
4. A local app uses Railway’s externally reachable URL.
5. Required SSL options are present.
6. The database has not reached its connection limit.
7. Next.js was restarted after changing `.env`.

Test the connection by applying migrations:

```bash
pnpm db:migrate
```

If migrations work but the dataset is empty:

```bash
pnpm db:seed-resumes
```

### Groq is not configured

Add `GROQ_API_KEY` to `.env` and restart the server. Dataset browsing and history do not require Groq, but new screening runs do.

### Failed to generate or validate JSON

ClearScreen has a targeted fallback for known Groq validation failures. If an error still reaches the UI:

- confirm the selected model supports the requested output behaviour,
- inspect the server log,
- keep prompts and Zod schemas aligned, and
- run `pnpm test` to verify fallback coverage.

### Dataset count is zero

Confirm `resume-data-set/Resume/Resume.csv` exists, then run the importer. For another file, pass its absolute path and verify the required columns.

### Port 3000 is in use

Use the URL printed by `pnpm dev` or choose a port:

```bash
pnpm exec next dev -p 3001
```

### A run is `PARTIAL`

Some evaluations failed while others completed. Open the run, identify **Needs retry** rows, and inspect server logs for provider, timeout, or validation errors. Completed evaluations remain available.

## Future improvements

- Authentication and HR-specific roles.
- Durable background jobs with streamed progress instead of request-bound polling.
- Cancel and retry controls.
- Persistent queue recovery after a server restart.
- Stronger PII detection and de-identification.
- Semantic retrieval or embeddings for pre-screening.
- Human-reviewed requirement weights.
- Labelled evaluation benchmarks.
- Fairness and adverse-impact monitoring.
- Audit exports and model-cost reporting.
- Retention and deletion workflows.
- Job-profile review before screening.
- Native PDF/DOCX ingestion.
- Production observability for latency, errors, and model drift.

## Responsible-use statement

ClearScreen assists with organising resume evidence against explicit job requirements. Its output is incomplete because resumes are incomplete representations of people, model assessments can be wrong, and historical datasets can contain bias.

Do not use a score or match label as the sole basis for an employment decision. A trained human should inspect the original application, consider transferable experience, verify critical requirements, document the decision, and follow applicable privacy, discrimination, employment, and AI-governance obligations.
