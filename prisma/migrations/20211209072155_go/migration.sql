/*
  Warnings:

  - You are about to drop the column `unidadeId` on the `produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `Produto_unidadeId_fkey`;

-- AlterTable
ALTER TABLE `produto` DROP COLUMN `unidadeId`;

-- CreateTable
CREATE TABLE `_LocalToProduto` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LocalToProduto_AB_unique`(`A`, `B`),
    INDEX `_LocalToProduto_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_LocalToProduto` ADD FOREIGN KEY (`A`) REFERENCES `Local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LocalToProduto` ADD FOREIGN KEY (`B`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
