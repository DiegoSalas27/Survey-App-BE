import { DbLoadSurveyById } from '@data/usecases/survey/load-survey-by-id/db-load-survey-by-id'
import { LoadSurveyById } from '@domain/usecases/survey/load-survey-by-id'
import { SurveyMongoRepository } from '@infrastructure/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const loadSurveyByIdRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(loadSurveyByIdRepository)
}
