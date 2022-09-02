/*
  Warnings:

  - You are about to drop the column `produtoId` on the `unidade` table. All the data in the column will be lost.
  - Added the required column `unidadeId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `unidade` DROP FOREIGN KEY `Unidade_produtoId_fkey`;

-- AlterTable
ALTER TABLE `produto` ADD COLUMN `unidadeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `unidade` DROP COLUMN `produtoId`;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_unidadeId_fkey` FOREIGN KEY (`unidadeId`) REFERENCES `Unidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
