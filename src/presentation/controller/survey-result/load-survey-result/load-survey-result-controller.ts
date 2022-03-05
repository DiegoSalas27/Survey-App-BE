import { LoadSurveyResult } from '@domain/usecases/survey-result/load-survey-result'
import {
  Controller,
  forbidden,
  HttpRequest,
  httpResponse,
  InvalidParamError,
  LoadSurveyById,
  serverError
} from './save-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor(private readonly loadSurveyById: LoadSurveyById, private readonly loadSurveyResult: LoadSurveyResult) {}
  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      await this.loadSurveyResult.load(surveyId)
      return null
    } catch (error: any) {
      return serverError(error)
    }
  }
}
