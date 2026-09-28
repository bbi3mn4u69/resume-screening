ALTER TABLE "Resume"
ADD COLUMN "datasetName" TEXT,
ADD COLUMN "resumeHtml" TEXT;

CREATE INDEX "Resume_originalCategory_idx" ON "Resume"("originalCategory");
CREATE UNIQUE INDEX "Resume_datasetName_externalId_key" ON "Resume"("datasetName", "externalId");
