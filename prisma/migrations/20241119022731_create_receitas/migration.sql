-- CreateTable
CREATE TABLE `receitas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NOT NULL,
    `categoria_id` INTEGER NOT NULL,
    `nome` VARCHAR(45) NULL,
    `tempo_preparo_minutos` INTEGER NULL,
    `porcoes` INTEGER NULL,
    `modo_preparo` TEXT NOT NULL,
    `ingredientes` TEXT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alterado_em` DATETIME(3) NOT NULL,

    INDEX `receitas_categoria_id_fkey`(`categoria_id`),
    INDEX `receitas_usuario_id_fkey`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
