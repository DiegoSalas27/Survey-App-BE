import { AddAccountRepository } from '@data/protocols/db/add-account-repository'
import { AccountModel } from '@domain/models/account'
import { AddAccountModel } from '@domain/usecases/add-account'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const { value: account } = await accountCollection.findOneAndUpdate(
      { _id: new ObjectId() },
      { $setOnInsert: accountData },
      { upsert: true, returnDocument: 'after' }
    )
    return MongoHelper.map(account)
  }
}
