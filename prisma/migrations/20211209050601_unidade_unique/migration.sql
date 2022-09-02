/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Unidade` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Unidade_name_key` ON `Unidade`(`name`);
