import { badRequest, ok, serverError } from '@presentation/helpers/http/http-helper'
import { AddAccount, Controller, HttpRequest, httpResponse, Validation } from './signup-controller-protocols'

export class SignUpController implements Controller {
  constructor(private readonly addAccount: AddAccount, private readonly validation: Validation) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
