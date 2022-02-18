import { AddAccountRepository } from '@data/protocols/db/add-account-repository'
import { LoadAccountByEmailRepository } from '@data/protocols/db/load-account-by-email-repository'
import { AccountModel } from '@domain/models/account'
import { AddAccountModel } from '@domain/usecases/add-account'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const { value: account } = await accountCollection.findOneAndUpdate(
      { _id: new ObjectId() },
      { $setOnInsert: accountData },
      { upsert: true, returnDocument: 'after' }
    )
    return MongoHelper.map(account)
  }

  async loadByEmail(email: string): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }
}
