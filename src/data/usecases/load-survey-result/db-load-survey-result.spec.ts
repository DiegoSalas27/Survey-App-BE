import { LoadSurveyResultRepository } from '@data/protocols/db/survey-result/load-survey-result-repository'
import { mockSurveyResultModel } from '@domain/test'
import { SurveyResultModel } from '../survey-result/save-survey-result/db-save-survey-result-protocols'
import { DbLoadSurveyResult } from './db-load-survey-result'

const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId(surveyId: string): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultRepositoryStub()
}

type SutTypes = {
  loadSurveyResultRepositoryStub: LoadSurveyResultRepository
  sut: DbLoadSurveyResult
}

const makeSut = (): SutTypes => {
  const loadSurveyResultRepositoryStub = mockLoadSurveyResultRepository()
  const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)

  return {
    loadSurveyResultRepositoryStub,
    sut
  }
}

describe('DbLoadSurveyResult UseCase', () => {
  test('Should call LoadSurveyResultRepository with correct values', async () => {
    const { loadSurveyResultRepositoryStub, sut } = makeSut()
    const loadBySurveyIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId')
    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
