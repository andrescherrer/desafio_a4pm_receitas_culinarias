-- CreateIndex
CREATE INDEX `index_categoria_nome` ON `categorias`(`nome`);

-- CreateIndex
CREATE INDEX `index_usuario_login` ON `usuarios`(`login`);

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
