import { PrismaUsuariosRepository } from "@/repositories/prisma/prisma-usuarios-repository";
import { RegisterUseCase } from "@/use-cases/register";


export function makeRegisterUseCase() {
    const usuariosRepository = new PrismaUsuariosRepository();
    const registerUseCase = new RegisterUseCase(usuariosRepository);

    return new RegisterUseCase(usuariosRepository);
}
