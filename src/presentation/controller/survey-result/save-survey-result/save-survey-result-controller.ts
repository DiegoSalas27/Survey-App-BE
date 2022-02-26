import { SaveSurveyResult } from '@domain/usecases/survey-result/save-survey-result'
import { LoadSurveyById } from '@domain/usecases/survey/load-survey-by-id'
import { forbidden, InvalidParamError, ok, serverError } from '@presentation/middlewares/auth-middleware-protocols'
import { Controller, HttpRequest, httpResponse } from './save-survey-result-controller-protocols'

export class SaveSurveyResultController implements Controller {
  constructor(private readonly loadSurveyById: LoadSurveyById, private readonly saveSurveyResult: SaveSurveyResult) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const { accountId } = httpRequest
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }
      const surveyResult = await this.saveSurveyResult.save({
        accountId,
        surveyId,
        answer,
        date: new Date()
      })
      return ok(surveyResult)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
