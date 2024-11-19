export class UsuarioJaExisteError extends Error {
    constructor() {
      super('Login já existente!')
    }
  }