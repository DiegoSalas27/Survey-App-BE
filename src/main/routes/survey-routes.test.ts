import request from 'supertest'
import { sign } from 'jsonwebtoken'
import { MongoHelper } from '@infrastructure/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'

import app from '../config/app'
import env from '@main/config/env'

let surveyCollection: Collection
let accountCollection: Collection

describe('Surver Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    surveyCollection = MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /surveys', () => {
    test('Should return 403 on add survey without accessToken', async () => {
      await request(app)
        .post('/api/surveys')
        .send({
          question: 'Question',
          answers: [
            {
              answer: 'Answer 1',
              image: 'http://image-name.com'
            },
            {
              answer: 'Answer 2'
            }
          ]
        })
        .expect(403)
    })

    test('Should return 204 on add survey with valid accessToken', async () => {
      const res = await accountCollection.insertOne({
        name: 'Rodrigo',
        email: 'rodrigo.maguino@gmail.com',
        password: '123',
        role: 'admin'
      })
      const id = res.insertedId

      const accessToken = sign(id.toString(), env.jwtSecret)

      await accountCollection.updateOne(
        { _id: id },
        {
          $set: {
            accessToken
          }
        }
      )

      await request(app)
        .post('/api/surveys')
        .set('x-access-token', accessToken)
        .send({
          question: 'Question',
          answers: [
            {
              answer: 'Answer 1',
              image: 'http://image-name.com'
            },
            {
              answer: 'Answer 2'
            }
          ]
        })
        .expect(204)
    })
  })
})
