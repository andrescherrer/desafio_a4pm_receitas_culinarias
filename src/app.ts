import fastify from "fastify";
import { usuariosRoutes } from "./http/controllers/usuarios/routes";
import { ZodError } from "zod";
import { env } from "@/env";

export const app = fastify();

app.register(usuariosRoutes)

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Erro de Validação.', issues: error.format() })
    }

    if (env.NODE_ENV !== 'production') {
        console.error(error);
    } else {
        // TODO: logar erro em uma ferramenta externa
    }
    
    return reply.status(500).send({ message: 'Erro interno no servidor.' })
})
