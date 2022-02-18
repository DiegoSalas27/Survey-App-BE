import { AccountModel, AddAccount, AddAccountModel, AddAccountRepository, Hasher } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly hasher: Hasher
  private readonly addAccountRepository: AddAccountRepository

  constructor(hasher: Hasher, addAccountRepository: AddAccountRepository) {
    this.hasher = hasher
    this.addAccountRepository = addAccountRepository
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(accountData.password)
    // the first empty object makes sure we don't modify the accountData value, we just pass an object with an addicional
    // or overwritten property value, but not modifying the actual accountData object
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    // return await new Promise(resolve => resolve(account))
    return account
  }
}
