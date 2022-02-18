import env from '../../config/env'
import { DbAuthentication } from '@data/usecases/authentication/db-authentication'
import { LogMongoRepository } from '@infrastructure/db/mongodb/log/log-mongo-repository'
import { AccountMongoRepository } from '@infrastructure/db/mongodb/account/account-mongo-repository'
import { LogControllerDecorator } from '@main/decorators/log-controller-decorator'
import { LoginController } from '@presentation/controller/login/login-controller'
import { Controller } from '@presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'
import { BcryptAdapter } from '@infrastructure/cryptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@infrastructure/cryptography/jwt-adapter/jwt-adapter'

export const makeLoginController = (): Controller => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const dbAuthentication = new DbAuthentication(
    accountMongoRepository,
    bcryptAdapter,
    jwtAdapter,
    accountMongoRepository
  )
  const loginController = new LoginController(dbAuthentication, makeLoginValidation())
  const logErrorRepository = new LogMongoRepository()
  return new LogControllerDecorator(loginController, logErrorRepository)
}
