import { UsuariosRepository } from "@/repositories/usuarios-repository";
import { Usuario, Prisma } from "@prisma/client";

export class InMemoryUsuariosRepository implements UsuariosRepository {
    public items: Usuario[] = [];

    async findById(id: number) {
        const usuario = this.items.find((item) => item.id === id);

        if (!usuario) {
            return null;
        }

        return usuario;
    }
    async findByLogin(login: string) {
        const usuario = this.items.find((item) => item.login === login);

        if (!usuario) {
            return null;
        }

        return usuario;
    }
    async create(data: Prisma.UsuarioCreateInput) {
        const usuario = {
            id: this.items.length + 1,
            nome: data.nome ? data.nome : null,
            login: data.login,
            senha: data.senha,  
            criado_em: new Date(),
            alterado_em: new Date(),
        };

        this.items.push(usuario);

        return usuario;
    }
}
