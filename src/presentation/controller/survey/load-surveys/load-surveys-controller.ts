import { Controller, HttpRequest, httpResponse, LoadSurveys } from './load-surveys-controller-protocols'

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurveys: LoadSurveys) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    await this.loadSurveys.load()
    return null
  }
}
