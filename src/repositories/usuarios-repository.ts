import { Prisma, Usuario } from "@prisma/client";

export interface UsuariosRepository {
    findById(id: number): Promise<Usuario | null>;
    findByLogin(login: string): Promise<Usuario | null>
    create(data: Prisma.UsuarioCreateInput): Promise<Usuario>
}