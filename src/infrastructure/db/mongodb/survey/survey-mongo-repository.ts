import { LoadSurveysRepository } from '@data/protocols/db/survey/load-survey-repository'
import { AddSurveyModel, AddSurveyRepository } from '@data/usecases/add-survey/db-add-survey-protocols'
import { SurveyModel } from '@domain/models/survey'
import { LoadSurveyById } from '@domain/usecases/load-survey-by-id'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyById {
  async add(surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll(): Promise<SurveyModel[]> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find().toArray()
    return surveys as any
  }

  async loadById(id: string): Promise<SurveyModel> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne<SurveyModel>({ _id: id })
    return survey
  }
}
