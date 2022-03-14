import { badRequest, ok, serverError, unauthorized } from '@presentation/helpers/http/http-helper'
import { Authentication, Controller, HttpRequest, httpResponse, Validation } from './login-controller-protocols'

export class LoginController implements Controller {
  constructor(private readonly authentication: Authentication, private readonly validation: Validation) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { email, password } = httpRequest.body

      const account = await this.authentication.auth({ email, password })
      if (!account) {
        return unauthorized()
      }

      return ok(account)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
