import { AddAccountModel } from '@domain/usecases/account/add-account'
import { AddSurveyModel } from '@domain/usecases/survey/add-survey'
import { SaveSurveyResultModel } from '@domain/usecases/survey-result/save-survey-result'
import { Collection, ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'

let surveyCollection: Collection<AddSurveyModel>
let surveyResultCollection: Collection<SaveSurveyResultModel>
let accountCollection: Collection<AddAccountModel>

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

const makeSurvey = async (): Promise<ObjectId> => {
  const res = await surveyCollection.insertOne({
    question: 'any_question',
    answers: [
      {
        image: 'any_image',
        answer: 'any_answer'
      },
      {
        answer: 'other_answer'
      }
    ],
    date: new Date()
  })

  return res.insertedId
}

const makeAccount = async (): Promise<ObjectId> => {
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
    surveyCollection = MongoHelper.getCollection<AddSurveyModel>('surveys')
    await surveyCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    surveyResultCollection = MongoHelper.getCollection<SaveSurveyResultModel>('surveysResults')
    await surveyResultCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    accountCollection = MongoHelper.getCollection<AddAccountModel>('accounts')
    await accountCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const surveyId = makeSurvey() as unknown as string
      const accountId = makeAccount() as unknown as string

      const sut = makeSut()
      const surveyResult = await sut.save({
        surveyId,
        accountId,
        answer: 'any_answer',
        date: new Date()
      })
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.id).toBeTruthy()
      expect(surveyResult.answer).toBe('any_answer')
    })

    test('Should update a survey result if its not new', async () => {
      const surveyId = makeSurvey() as unknown as string
      const accountId = makeAccount() as unknown as string
      const res = await surveyResultCollection.insertOne({
        surveyId,
        accountId,
        answer: 'any_answer',
        date: new Date()
      })

      const sut = makeSut()
      const surveyResult = await sut.save({
        surveyId,
        accountId,
        answer: 'updated_answer',
        date: new Date()
      })
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.id).toEqual(res.insertedId)
      expect(surveyResult.answer).toBe('updated_answer')
    })
  })
})
