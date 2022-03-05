import { throwError } from '@domain/test'
import { DbLoadSurveyResult } from './db-load-survey-result'
import { LoadSurveyResultRepository, mockLoadSurveyResultRepository } from './db-load-survey-result-protocols'

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

  test('Should throw if LoadSurveyResultRepository throws', async () => {
    const { loadSurveyResultRepositoryStub, sut } = makeSut()
    jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId').mockImplementationOnce(throwError)
    const promise = sut.load('any_survey_id')
    await expect(promise).rejects.toThrow()
  })
})
