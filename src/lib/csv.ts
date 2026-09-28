import { sanitizeResume } from "../server/screening/sanitize-resume.ts";

const RESUME_COLUMNS = ["resume_str", "resume", "resume_text", "text", "cv"];
const ID_COLUMNS = ["id"];
const CATEGORY_COLUMNS = ["category", "job_category"];

export type CsvColumns = {
  resumeText: string | null;
  externalId: string | null;
  category: string | null;
};

function findColumn(headers: string[], accepted: string[]) {
  return (
    headers.find((header) => accepted.includes(header.trim().toLowerCase())) ??
    null
  );
}

function cleanOptional(value: string | undefined) {
  const cleaned = value?.trim();
  if (!cleaned) return null;
  return cleaned;
}

export function detectCsvColumns(headers: string[]): CsvColumns {
  return {
    resumeText: findColumn(headers, RESUME_COLUMNS),
    externalId: findColumn(headers, ID_COLUMNS),
    category: findColumn(headers, CATEGORY_COLUMNS),
  };
}

export function normalizeResumeRows(
  rows: Array<Record<string, string | undefined>>,
  columns: CsvColumns,
  sourceFileName: string,
) {
  if (!columns.resumeText)
    throw new Error("No supported resume text column was found.");

  const resumes = rows.flatMap((row, index) => {
    const rawText = row[columns.resumeText!]?.replace(/\s+/g, " ").trim();
    if (!rawText) return [];
    return [
      {
        externalId: columns.externalId
          ? cleanOptional(row[columns.externalId])
          : null,
        originalCategory: columns.category
          ? cleanOptional(row[columns.category])
          : null,
        rawText,
        sanitizedText: sanitizeResume(rawText),
        sourceFileName,
        sourceRow: index + 2,
      },
    ];
  });

  return { resumes, skipped: rows.length - resumes.length };
}

export function getCategoryCounts(
  resumes: Array<{ originalCategory: string | null }>,
) {
  const counts = new Map<string, number>();
  for (const resume of resumes) {
    const category = resume.originalCategory ?? "UNCATEGORISED";
    counts.set(category, (counts.get(category) ?? 0) + 1);
  }
  return [...counts]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}
