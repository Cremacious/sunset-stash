/*
  Warnings:

  - Added the required column `updatedAt` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Friendship" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Friendship_userId_idx" ON "Friendship"("userId");

-- CreateIndex
CREATE INDEX "Friendship_friendId_idx" ON "Friendship"("friendId");
