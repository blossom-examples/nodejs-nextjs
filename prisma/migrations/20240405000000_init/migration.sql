-- CreateTable
CREATE TABLE "jokes" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jokes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "jokes_category_idx" ON "jokes"("category");