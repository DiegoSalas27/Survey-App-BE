import { LoadSurveyById } from '@domain/usecases/survey/load-survey-by-id'
import { forbidden, InvalidParamError, serverError } from '@presentation/middlewares/auth-middleware-protocols'
import { Controller, HttpRequest, httpResponse } from './save-survey-result-controller-protocols'

export class SaveSurveyResult implements Controller {
  constructor(private readonly loadSurveyById: LoadSurveyById) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error: any) {
      return serverError(error)
    }
  }
}
