import { HashComparer } from '@data/protocols/cryptography/hash-comparer'
import { TokenGenerator } from '@data/protocols/cryptography/token-generator'
import { LoadAccountByEmailRepository } from '@data/protocols/db/load-account-by-email-repository'
import { Authentication, AuthenticationModel } from '@domain/usecases/authentication'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer
  private readonly tokenGenerator: TokenGenerator

  constructor(
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer,
    tokenGenerator: TokenGenerator
  ) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.tokenGenerator = tokenGenerator
  }

  // in case en error is return from a dependency, we don't want to use try and catch,
  // because we want the error to propagate so that the controller can capture it and
  // do something with it
  async auth(authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      const isValid = await this.hashComparer.compare(authentication.password, account.password)
      if (isValid) {
        const accessToken = await this.tokenGenerator.generate(account.id)
        return accessToken
      }
    }

    return null
  }
}
