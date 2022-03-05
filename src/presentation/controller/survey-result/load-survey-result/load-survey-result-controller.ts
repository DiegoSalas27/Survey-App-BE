import { LoadSurveyById } from '../save-survey-result/save-survey-result-controller-protocols'
import { Controller, HttpRequest, httpResponse } from './save-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor(private readonly loadSurveyById: LoadSurveyById) {}
  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return await Promise.resolve(null)
  }
}
