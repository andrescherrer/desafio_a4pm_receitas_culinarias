import { makeRegisterUseCase } from "@/repositories/factories/make-register-use-case";
import { UsuarioJaExisteError } from "@/use-cases/errors/user-already-exists-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        nome: z.string(),
        login: z.string().min(6).max(100),
        senha: z.string().min(8),
    })

    const { nome, login, senha } = registerBodySchema.parse(request.body)

    try {
        const registerUseCase = makeRegisterUseCase();
        
        await registerUseCase.execute({
            nome, 
            login,
            senha,
        })
    } catch (error) {
        if (error instanceof UsuarioJaExisteError) {
            return reply.status(409).send({ message: error.message})
        } 

        throw error
    }

    return reply.status(201).send()
}
