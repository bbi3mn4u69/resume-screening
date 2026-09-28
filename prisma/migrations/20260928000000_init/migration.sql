-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "sourceFileName" TEXT,
    "sourceRow" INTEGER,
    "originalCategory" TEXT,
    "rawText" TEXT NOT NULL,
    "sanitizedText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "extractedProfileJson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScreeningRun" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "modelName" TEXT NOT NULL,
    "promptVersion" TEXT NOT NULL DEFAULT 'v1',
    "totalCandidates" INTEGER NOT NULL DEFAULT 0,
    "processedCount" INTEGER NOT NULL DEFAULT 0,
    "failedCount" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScreeningRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeEvaluation" (
    "id" TEXT NOT NULL,
    "runId" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "preScreenScore" INTEGER,
    "fitScore" INTEGER,
    "matchLabel" TEXT,
    "confidence" DOUBLE PRECISION,
    "matchedRequirementsJson" TEXT,
    "missingRequirementsJson" TEXT,
    "supportingEvidenceJson" TEXT,
    "summary" TEXT,
    "needsHumanReview" BOOLEAN NOT NULL DEFAULT false,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResumeEvaluation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Resume_externalId_idx" ON "Resume"("externalId");
CREATE INDEX "Resume_createdAt_idx" ON "Resume"("createdAt");
CREATE INDEX "ScreeningRun_jobId_idx" ON "ScreeningRun"("jobId");
CREATE INDEX "ScreeningRun_createdAt_idx" ON "ScreeningRun"("createdAt");
CREATE INDEX "ResumeEvaluation_runId_matchLabel_idx" ON "ResumeEvaluation"("runId", "matchLabel");
CREATE INDEX "ResumeEvaluation_resumeId_idx" ON "ResumeEvaluation"("resumeId");
CREATE INDEX "ResumeEvaluation_fitScore_idx" ON "ResumeEvaluation"("fitScore");
CREATE UNIQUE INDEX "ResumeEvaluation_runId_resumeId_key" ON "ResumeEvaluation"("runId", "resumeId");

-- AddForeignKey
ALTER TABLE "ScreeningRun" ADD CONSTRAINT "ScreeningRun_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ResumeEvaluation" ADD CONSTRAINT "ResumeEvaluation_runId_fkey" FOREIGN KEY ("runId") REFERENCES "ScreeningRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ResumeEvaluation" ADD CONSTRAINT "ResumeEvaluation_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
