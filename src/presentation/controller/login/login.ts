import { MissingParamError } from '@presentation/errors'
import { badRequest } from '@presentation/helpers/http-helper'
import { Controller, HttpRequest, httpResponse } from '../signup/signup-protocols'

export class LoginController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
  }
}
