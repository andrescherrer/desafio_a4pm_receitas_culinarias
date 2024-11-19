import { Usuario, Prisma } from "@prisma/client";
import{ UsuariosRepository } from "../usuarios-repository"
import { prisma } from "@/lib/prisma";

export class PrismaUsuariosRepository implements UsuariosRepository {
    async findById(id: number) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                id,
            },
        })

        return usuario;
    }
    async findByLogin(login: string) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                login,
            },
        })

        return usuario;
    }
    async create(data: Prisma.UsuarioCreateInput) {
        const usuario = await prisma.usuario.create({
            data,
        })

        return usuario;
    }
}
