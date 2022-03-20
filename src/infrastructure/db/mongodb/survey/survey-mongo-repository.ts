import { LoadSurveyByIdRepository } from '@data/protocols/db/survey/load-survey-by-id-repository'
import { LoadSurveysRepository } from '@data/protocols/db/survey/load-survey-repository'
import { AddSurveyParams, AddSurveyRepository } from '@data/usecases/survey/add-survey/db-add-survey-protocols'
import { SurveyModel } from '@domain/models/survey'
import { ObjectId } from 'mongodb'
import { QueryBuilder } from '../helpers'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add(surveyData: AddSurveyParams): Promise<void> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll(accountId: string): Promise<SurveyModel[]> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const query = new QueryBuilder()
      .lookup({
        from: 'surveyResults',
        foreignField: 'surveyId',
        localField: '_id',
        as: 'result'
      })
      .project({
        _id: 1,
        question: 1,
        answers: 1,
        date: 1,
        didAnswer: {
          $gte: [{
            $size: {
              $filter: {
                $input: '$result',
                as: 'item',
                cond: {
                  $eq: ['$$item.accountId', new ObjectId(accountId)]
                }
              }
            }
          }, 1]
        }
      })
      .build()

      const surveys = await surveyCollection.aggregate(query).toArray()
      return MongoHelper.mapArray(surveys)
  }

  async loadById(id: string): Promise<SurveyModel> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne<SurveyModel>({ _id: new ObjectId(id) })
    return survey && MongoHelper.map(survey)
  }
}
