import { noContent, ok, serverError } from '@presentation/middlewares/auth-middleware-protocols'
import { Controller, HttpRequest, httpResponse, LoadSurveys } from './load-surveys-controller-protocols'

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurveys: LoadSurveys) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const surveys = await this.loadSurveys.load(httpRequest.accountId)
      return surveys.length ? ok(surveys) : noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
