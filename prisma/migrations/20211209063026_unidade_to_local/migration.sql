/*
  Warnings:

  - You are about to drop the `unidade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `Produto_unidadeId_fkey`;

-- DropTable
DROP TABLE `unidade`;

-- CreateTable
CREATE TABLE `Local` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_unidadeId_fkey` FOREIGN KEY (`unidadeId`) REFERENCES `Local`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
