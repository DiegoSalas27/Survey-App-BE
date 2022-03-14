import { AccountModel } from '@domain/models/account'
import { mockAccountModel } from '@domain/test'
import { AddAccount, AddAccountParams } from '@domain/usecases/account/add-account'
import { Authentication, AuthenticationParams, AuthenticationResponse } from '@domain/usecases/account/authentication'
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
    async auth(authentication: AuthenticationParams): Promise<AuthenticationResponse> {
      return await new Promise(resolve => resolve({
        accessToken: 'any_token',
        name: 'any_name'
      }))
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
