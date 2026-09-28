import { readFile } from "node:fs/promises";
import path from "node:path";

import Papa from "papaparse";

import { PrismaClient } from "../generated/prisma/index.js";

const DATASET_NAME = "resume-data-set-v1";
const csvPath = path.resolve(
  process.argv[2] ?? "resume-data-set/Resume/Resume.csv",
);
const db = new PrismaClient();

function sanitizeResume(text) {
  return text
    .replace(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g, "[EMAIL REDACTED]")
    .replace(/(?:https?:\/\/|www\.)\S+/gi, "[URL REDACTED]")
    .replace(/(?<!\w)(?:\+?\d[\d ()-]{7,}\d)(?!\w)/g, "[PHONE REDACTED]");
}

try {
  const source = await readFile(csvPath, "utf8");
  const parsed = Papa.parse(source, { header: true, skipEmptyLines: true });
  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0]?.message ?? "CSV parsing failed.");
  }

  const resumes = parsed.data.flatMap((row, index) => {
    const rawText = row.Resume_str?.replace(/\s+/g, " ").trim();
    const externalId = row.ID?.trim();
    if (!rawText || !externalId) return [];
    return [
      {
        datasetName: DATASET_NAME,
        externalId,
        sourceFileName: path.basename(csvPath),
        sourceRow: index + 2,
        originalCategory: row.Category?.trim() || null,
        rawText,
        sanitizedText: sanitizeResume(rawText),
        resumeHtml: row.Resume_html || null,
      },
    ];
  });

  let inserted = 0;
  for (let index = 0; index < resumes.length; index += 100) {
    const result = await db.resume.createMany({
      data: resumes.slice(index, index + 100),
      skipDuplicates: true,
    });
    inserted += result.count;
  }

  const stored = await db.resume.count({
    where: { datasetName: DATASET_NAME },
  });
  console.log(
    JSON.stringify({
      dataset: DATASET_NAME,
      csvRows: parsed.data.length,
      validRows: resumes.length,
      skippedRows: parsed.data.length - resumes.length,
      inserted,
      stored,
    }),
  );
} finally {
  await db.$disconnect();
}
