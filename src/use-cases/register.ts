import { UsuariosRepository } from "@/repositories/usuarios-repository";
import { Usuario } from "@prisma/client";
import bcrypt from "bcrypt";
import { UsuarioJaExisteError } from "./errors/user-already-exists-error";

interface RegisterUseCaseRequest {
    nome: string
    login: string
    senha: string
}

interface RegisterUseCaseResponse {
    usuario: Usuario
}


export class RegisterUseCase {
    constructor(private usuariosRepository: UsuariosRepository) {}
    async execute({
        nome,
        login,
        senha,
    }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
        const senha_hash = await bcrypt.hash(senha, 6)

        const usuarioComMesmoLogin = await this.usuariosRepository.findByLogin(login)

        if (usuarioComMesmoLogin) {
            throw new UsuarioJaExisteError()
        }

        const usuario = await this.usuariosRepository.create({
            nome,
            login,
            senha: senha_hash,
        })

        return {
            usuario,
        }   
    }
}
