import { InMemoryUsuariosRepository } from '@/repositories/in-memory/in-memory-usuarios-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'

let usuariosRepository: InMemoryUsuariosRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        usuariosRepository = new InMemoryUsuariosRepository()
        sut = new RegisterUseCase(usuariosRepository)
    })

    it('Deve registar um usuário', async () => {
        const usuario = await sut.execute({
            nome: 'André',
            login: 'andre',
            senha: 'senha123',
        })

        expect(usuario.id).toEqual(expect.any(Number))
    })
})