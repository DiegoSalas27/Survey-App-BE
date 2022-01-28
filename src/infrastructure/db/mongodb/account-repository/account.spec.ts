import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account';

describe('Account Mongo Repository', () => { // This is an integration test
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  })
  afterAll(async () => {
    await MongoHelper.disconnect();
  })
  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts');
    await accountCollection.deleteMany({}); // delete objects in memory so that tests don't overlap
  })

  const makeSut = (): AccountMongoRepository => {
    return  new AccountMongoRepository()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut();
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })
    expect(account).toBeTruthy() // ensure is not null
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.password).toBe('any_password')
  })
})
