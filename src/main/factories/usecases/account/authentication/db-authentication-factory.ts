import { DbAuthentication } from '@data/usecases/account/authentication/db-authentication'
import { Authentication } from '@domain/usecases/account/authentication'
import { BcryptAdapter } from '@infrastructure/cryptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@infrastructure/cryptography/jwt-adapter/jwt-adapter'
import { AccountMongoRepository } from '@infrastructure/db/mongodb/account/account-mongo-repository'
import env from '@main/config/env'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
