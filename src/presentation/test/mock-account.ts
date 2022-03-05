import { AccountModel } from '@domain/models/account'
import { mockAccountModel } from '@domain/test'
import { AddAccount, AddAccountParams } from '@domain/usecases/account/add-account'
import { Authentication, AuthenticationParams } from '@domain/usecases/account/authentication'
import { LoadAccountByToken } from '@presentation/middlewares/auth-middleware-protocols'

export const mockAddAccount = (): AddAccount => {
  // factory
  class AddAccountStub implements AddAccount {
    // mocked object
    async add(account: AddAccountParams): Promise<AccountModel> {
      return await new Promise(resolve => resolve(mockAccountModel()))
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth(authentication: AuthenticationParams): Promise<string> {
      return await new Promise(resolve => resolve('any_token'))
    }
  }

  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load(accessToken: string, role?: string): Promise<AccountModel> {
      return await new Promise(resolve => resolve(mockAccountModel()))
    }
  }
  return new LoadAccountByTokenStub()
}