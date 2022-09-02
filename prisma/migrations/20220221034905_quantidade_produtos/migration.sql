-- CreateTable
CREATE TABLE `ProdutoConfig` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade_de_produtos` INTEGER NOT NULL DEFAULT 10,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
