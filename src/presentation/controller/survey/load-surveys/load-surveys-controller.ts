import { ok } from '@presentation/middlewares/auth-middleware-protocols'
import { Controller, HttpRequest, httpResponse, LoadSurveys } from './load-surveys-controller-protocols'

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurveys: LoadSurveys) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    const surveys = await this.loadSurveys.load()
    return ok(surveys)
  }
}
