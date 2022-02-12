import { MissingParamError } from '@presentation/errors'
import { badRequest } from '@presentation/helpers/http-helper'
import { Controller, HttpRequest, httpResponse } from '../signup/signup-protocols'

export class LoginController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    if (!httpRequest.body.email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }

    if (!httpRequest.body.password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
  }
}
