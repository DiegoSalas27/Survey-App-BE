import { LoadSurveyById } from '@domain/usecases/survey/load-survey-by-id'
import { forbidden, InvalidParamError } from '@presentation/middlewares/auth-middleware-protocols'
import { Controller, HttpRequest, httpResponse } from './save-survey-result-controller-protocols'

export class SaveSurveyResult implements Controller {
  constructor(private readonly loadSurveyById: LoadSurveyById) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    if (!survey) {
      return forbidden(new InvalidParamError('surveyId'))
    }
    return null
  }
}
