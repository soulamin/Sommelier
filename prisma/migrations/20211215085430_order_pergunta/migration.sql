/*
  Warnings:

  - Added the required column `order` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pergunta` ADD COLUMN `order` INTEGER NOT NULL;
