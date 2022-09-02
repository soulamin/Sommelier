/*
  Warnings:

  - Added the required column `rotaId` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pergunta` ADD COLUMN `rotaId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Rota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pergunta` ADD CONSTRAINT `Pergunta_rotaId_fkey` FOREIGN KEY (`rotaId`) REFERENCES `Rota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
