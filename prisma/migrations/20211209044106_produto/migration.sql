-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NULL,
    `descricao` VARCHAR(191) NULL,
    `preco` DOUBLE NULL,
    `preco_promocional` DOUBLE NULL,
    `corredor` VARCHAR(191) NULL,
    `setor` VARCHAR(191) NULL,
    `temperatura` VARCHAR(191) NULL,
    `caracteristicas_visuais` VARCHAR(191) NULL,
    `teor_alcoolico` VARCHAR(191) NULL,
    `volume` VARCHAR(191) NULL,
    `imagem` VARCHAR(191) NULL,
    `tipo` VARCHAR(191) NULL,
    `pais` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `produtoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Unidade` ADD CONSTRAINT `Unidade_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
