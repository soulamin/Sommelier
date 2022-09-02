/*
  Warnings:

  - You are about to drop the column `slug` on the `local` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Local` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Local_slug_key` ON `local`;

-- AlterTable
ALTER TABLE `local` DROP COLUMN `slug`;

-- CreateIndex
CREATE UNIQUE INDEX `Local_name_key` ON `Local`(`name`);
