-- AlterTable
ALTER TABLE "Post" ADD COLUMN "published" BOOLEAN NOT NULL DEFAULT true;

-- 기존 글 전부 비공개 (새 글은 기본 공개)
UPDATE "Post" SET "published" = false;

-- DropIndex
DROP INDEX "Post_createdAt_idx";

-- CreateIndex
CREATE INDEX "Post_published_createdAt_idx" ON "Post"("published", "createdAt");
