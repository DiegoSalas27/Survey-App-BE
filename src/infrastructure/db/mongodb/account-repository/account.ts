import { AddAccountRepository } from '@data/protocols/add-account-repository'
import { AccountModel } from '@domain/models/account'
import { AddAccountModel } from '@domain/usecases/add-account'
import { MongoHelper } from '@infrastructure/db/mongodb/helpers/mongo-helper'
import { ObjectId } from 'mongodb'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const { value: document } = await accountCollection.findOneAndUpdate(
      { _id: new ObjectId() },
      { $setOnInsert: accountData },
      { upsert: true, returnDocument: 'after' }
    )
    const { _id, ...accountWithoutId } = document;
    return Object.assign({}, accountWithoutId as any, { id: _id });
  }
}
