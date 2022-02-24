import { badRequest } from '@presentation/helpers/http/http-helper'
import { Controller, HttpRequest, httpResponse, Validation } from './add-survey-controller-protocols'

export class AddSurveyController implements Controller {
  constructor(private readonly validation: Validation) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
        return badRequest(error)
    }
    return await new Promise(resolve => resolve(null))
  }
}
