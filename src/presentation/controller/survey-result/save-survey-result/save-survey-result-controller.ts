import { LoadSurveyById } from '@domain/usecases/survey/load-survey-by-id'
import { Controller, HttpRequest, httpResponse } from './save-survey-result-controller-protocols'

export class SaveSurveyResult implements Controller {
  constructor(private readonly loadSurveyById: LoadSurveyById) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return null
  }
}
