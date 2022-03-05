import { mockLoadSurveyById } from '@presentation/test'
import { LoadSurveyById } from '../save-survey-result/save-survey-result-controller-protocols'
import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest } from './save-survey-result-controller-protocols'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

type SutTypes = {
  loadSurveyByIdStub: LoadSurveyById
  sut: LoadSurveyResultController
}

const makeSut = (): SutTypes => {
  const loadSurveyByIdStub = mockLoadSurveyById()
  const sut = new LoadSurveyResultController(loadSurveyByIdStub)

  return {
    loadSurveyByIdStub,
    sut
  }
}

describe('LoadSurveyResult Controller', () => {
  test('Should call LoadSurveyById wtih correct value', async () => {
    const { loadSurveyByIdStub, sut } = makeSut()
    const loadSurveyByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadSurveyByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
