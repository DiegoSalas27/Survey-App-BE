import { DbAddAccount } from '@data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '@infrastructure/cryptography/bcrypt-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '@infrastructure/db/mongodb/account/account-mongo-repository'
import { LogMongoRepository } from '@infrastructure/db/mongodb/log/log-mongo-repository'
import { LogControllerDecorator } from '@main/decorators/log-controller-decorator'
import { SignUpController } from '@presentation/controller/signup/signup-controller'
import { Controller } from '@presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(dbAddAccount, makeSignUpValidation())
  const logMongoRepository = new LogMongoRepository();
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
