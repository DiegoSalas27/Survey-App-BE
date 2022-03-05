import { AddAccountParams } from '@domain/usecases/account/add-account'
import { AddSurveyParams } from '@domain/usecases/survey/add-survey'
import { SaveSurveyResultParams } from '@domain/usecases/survey-result/save-survey-result'
import { Collection, ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'
import { SurveyModel } from '@domain/models/survey'

let surveyCollection: Collection<AddSurveyParams>
let surveyResultCollection: Collection<SaveSurveyResultParams>
let accountCollection: Collection<AddAccountParams>

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

const makeSurvey = async (): Promise<SurveyModel> => {
  const { value: surveyResult } = await surveyCollection.findOneAndUpdate(
    { _id: new ObjectId() },
    {
      $setOnInsert: {
        question: 'any_question',
        answers: [
          {
            image: 'any_image',
            answer: 'any_answer_1'
          },
          {
            answer: 'other_answer_2'
          },
          {
            answer: 'other_answer_3'
          }
        ],
        date: new Date()
      }
    },
    {
      upsert: true,
      returnDocument: 'after'
    }
  )

  return surveyResult && MongoHelper.map(surveyResult)
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
    surveyCollection = MongoHelper.getCollection<AddSurveyParams>('surveys')
    await surveyCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    surveyResultCollection = MongoHelper.getCollection<SaveSurveyResultParams>('surveysResults')
    await surveyResultCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
    accountCollection = MongoHelper.getCollection<AddAccountParams>('accounts')
    await accountCollection.deleteMany({}) // delete objects in memory so that tests don't overlap
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const survey = await makeSurvey()
      const accountId = (await makeAccount()) as unknown as string

      const sut = makeSut()
      await sut.save({
        surveyId: survey.id.toString(),
        accountId: accountId.toString(),
        answer: survey.answers[0].answer,
        date: new Date()
      })
      const surveyResult = await surveyResultCollection.findOne({
        surveyId: survey.id,
        accountId: accountId,
      })
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(survey.id)
    })

    test('Should update a survey result if its not new', async () => {
      const survey = await makeSurvey()
      const accountId = (await makeAccount()) as unknown as string
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
      const surveyResult = await surveyResultCollection.find({
        surveyId: survey.id,
        accountId: accountId,
      }).toArray()
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.length).toBe(1)
    })
  })

  describe('loadBySurveyId()', () => {
    test('Should load survey result', async () => {
      const survey = await makeSurvey()
      const accountId = (await makeAccount()) as unknown as string
      await surveyResultCollection.insertMany([
        {
          surveyId: survey.id,
          accountId: accountId,
          answer: survey.answers[0].answer,
          date: new Date()
        },
        {
          surveyId: survey.id,
          accountId: accountId,
          answer: survey.answers[0].answer,
          date: new Date()
        },
        {
          surveyId: survey.id,
          accountId: accountId,
          answer: survey.answers[1].answer,
          date: new Date()
        },
        {
          surveyId: survey.id,
          accountId: accountId,
          answer: survey.answers[1].answer,
          date: new Date()
        },
        {
          surveyId: survey.id,
          accountId: accountId,
          answer: survey.answers[1].answer,
          date: new Date()
        }
      ])

      const sut = makeSut()
      const surveyResult = await sut.loadBySurveyId(survey.id)
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(survey.id)
      expect(surveyResult.answers[0].count).toBe(3)
      expect(surveyResult.answers[0].percent).toBe(60)
      expect(surveyResult.answers[1].count).toBe(2)
      expect(surveyResult.answers[1].percent).toBe(40)
      expect(surveyResult.answers[2].count).toBe(0)
      expect(surveyResult.answers[2].percent).toBe(0)
    })
  })
})
