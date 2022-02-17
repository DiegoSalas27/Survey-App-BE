import { LoadAccountByEmailRepository } from '@data/protocols/db/load-account-by-email-repository'
import { Authentication, AuthenticationModel } from '@domain/usecases/authentication'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository

  constructor(loadAccountByEmailRepository: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
  }

  // in case en error is return from a dependency, we don't want to use try and catch,
  // because we want the error to propagate so that the controller can capture it and
  // do something with it
  async auth(authentication: AuthenticationModel): Promise<string> {
    await this.loadAccountByEmailRepository.load(authentication.email)
    return null
  }
}
