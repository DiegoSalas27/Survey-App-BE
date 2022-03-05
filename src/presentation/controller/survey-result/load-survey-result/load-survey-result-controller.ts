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
  constructor(private readonly loadSurveyById: LoadSurveyById) {}
  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return await Promise.resolve(null)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
