import { SurveyModel } from '@domain/models/survey'
import { mockAddSurveyParams } from '@domain/test'
import { AddAccountParams } from '@domain/usecases/account/add-account'
import { SaveSurveyResultParams } from '@domain/usecases/survey-result/save-survey-result'
import { AddSurveyParams } from '@domain/usecases/survey/add-survey'
import { Collection, ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'

let surveyCollection: Collection<AddSurveyParams>
let surveyResultCollection: Collection<SaveSurveyResultParams>
let accountCollection: Collection<AddAccountParams>

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

const mockSurvey = async (): Promise<SurveyModel> => {
  const { value: surveyResult } = await surveyCollection.findOneAndUpdate(
    { _id: new ObjectId() },
    {
      $setOnInsert: mockAddSurveyParams()
    },
    {
      upsert: true,
      returnDocument: 'after'
    }
  )

  return surveyResult && MongoHelper.map(surveyResult)
}

const mockAccount = async (): Promise<ObjectId> => {
  const res = await accountCollection.insertOne({
    name: 'any_name',
    email: 'any_email@gmail.com',
    password: 'any_password'
  })

  return res.insertedId
}

describe('Survey Result Mongo Repository', () => {
  // This is an integration test
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    surveyCollection = MongoHelper.getCollection<AddSurveyParams>('surveys')
    await surveyCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    surveyResultCollection = MongoHelper.getCollection<SaveSurveyResultParams>('surveyResults')
    await surveyResultCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    accountCollection = MongoHelper.getCollection<AddAccountParams>('accounts')
    await accountCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const survey = await mockSurvey()
      const accountId = (await mockAccount()) as unknown as string

      const sut = makeSut()
      await sut.save({
        surveyId: survey.id.toString(),
        accountId: accountId.toString(),
        answer: survey.answers[0].answer,
        date: new Date()
      })
      const surveyResult = await surveyResultCollection.findOne({
        surveyId: survey.id,
        accountId: accountId
      })
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(survey.id)
    })

    test('Should update a survey result if its not new', async () => {
      const survey = await mockSurvey()
      const accountId = (await mockAccount()) as unknown as string
      await surveyResultCollection.insertOne({
        surveyId: survey.id,
        accountId: accountId,
        answer: survey.answers[0].answer,
        date: new Date()
      })

      const sut = makeSut()
      await sut.save({
        surveyId: survey.id.toString(),
        accountId: accountId.toString(),
        answer: survey.answers[1].answer,
        date: new Date()
      })
      const surveyResult = await surveyResultCollection
        .find({
          surveyId: survey.id,
          accountId: accountId
        })
        .toArray()
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.length).toBe(1)
    })
  })

  describe('loadBySurveyId()', () => {
    test('Should load survey result', async () => {
      const survey = await mockSurvey()
      const accountId = await mockAccount()
      const accountId2 = await mockAccount()

      await surveyResultCollection.insertMany([
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(accountId),
          answer: survey.answers[0].answer,
          date: new Date()
        },
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(accountId2),
          answer: survey.answers[0].answer,
          date: new Date()
        }
      ])

      const sut = makeSut()
      const surveyResult = await sut.loadBySurveyId(survey.id, accountId.toString())
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(survey.id)
      expect(surveyResult.answers[0].count).toBe(2)
      expect(surveyResult.answers[0].percent).toBe(100)
      expect(surveyResult.answers[0].isCurrentAccountAnswer).toBe(true)
      expect(surveyResult.answers[1].count).toBe(0)
      expect(surveyResult.answers[1].percent).toBe(0)
      expect(surveyResult.answers[1].isCurrentAccountAnswer).toBe(false)
    })

    test('Should load survey result 2', async () => {
      const survey = await mockSurvey()
      const accountId = (await mockAccount()) as unknown as string
      const account2Id = (await mockAccount()) as unknown as string
      const account3Id = (await mockAccount()) as unknown as string
      await surveyResultCollection.insertMany([
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(accountId),
          answer: survey.answers[0].answer,
          date: new Date()
        },
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(account2Id),
          answer: survey.answers[1].answer,
          date: new Date()
        },
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(account3Id),
          answer: survey.answers[1].answer,
          date: new Date()
        }
      ])
      const sut = makeSut()
      const surveyResult = await sut.loadBySurveyId(survey.id, account2Id)
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(survey.id)
      expect(surveyResult.answers[0].count).toBe(2)
      expect(surveyResult.answers[0].percent).toBe(66.66666666666666)
      expect(surveyResult.answers[0].isCurrentAccountAnswer).toBe(true)
      expect(surveyResult.answers[1].count).toBe(1)
      expect(surveyResult.answers[1].percent).toBe(33.33333333333333)
      expect(surveyResult.answers[1].isCurrentAccountAnswer).toBe(false)
    })

    test('Should load survey result 3', async () => {
      const survey = await mockSurvey()
      const accountId = (await mockAccount()) as unknown as string
      const account2Id = (await mockAccount()) as unknown as string
      const account3Id = (await mockAccount()) as unknown as string
      await surveyResultCollection.insertMany([
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(accountId),
          answer: survey.answers[0].answer,
          date: new Date()
        },
        {
          surveyId: new ObjectId(survey.id),
          accountId: new ObjectId(account2Id),
          answer: survey.answers[1].answer,
          date: new Date()
        }
      ])
      const sut = makeSut()
      const surveyResult = await sut.loadBySurveyId(survey.id, account3Id)
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(survey.id)
      expect(surveyResult.answers[0].count).toBe(1)
      expect(surveyResult.answers[0].percent).toBe(50)
      expect(surveyResult.answers[0].isCurrentAccountAnswer).toBe(false)
      expect(surveyResult.answers[1].count).toBe(1)
      expect(surveyResult.answers[1].percent).toBe(50)
      expect(surveyResult.answers[1].isCurrentAccountAnswer).toBe(false)
    })

    test('Should return null if there is no survey result', async () => {
      const survey = await mockSurvey()
      const accountId = (await mockAccount()) as unknown as string
      const sut = makeSut()
      const surveyResult = await sut.loadBySurveyId(survey.id, accountId)
      expect(surveyResult).toBeNull()
    })
  })
})
