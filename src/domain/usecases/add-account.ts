import { AccountModel } from '@domain/models/account';

export interface AddAccountModel {
  name: string;
  email: string;
  password: string;
}

export interface AddAccount {
  add(account: AddAccountModel): Promise<AccountModel>
}

// It's in the domain layer where all of our bussines rules should go