ALTER TABLE "ScreeningRun"
ADD COLUMN "datasetCategory" TEXT,
ADD COLUMN "datasetCandidates" INTEGER NOT NULL DEFAULT 0;

UPDATE "ScreeningRun"
SET "datasetCandidates" = "sourceCandidates";
