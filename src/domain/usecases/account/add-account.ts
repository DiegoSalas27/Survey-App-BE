import { AccountModel } from '@domain/models/account'

export type AddAccountParams = Omit<AccountModel, 'id'>

export interface AddAccount {
  add(account: AddAccountParams): Promise<AccountModel>
}

// It's in the domain layer where all of our bussines rules protocols should go
