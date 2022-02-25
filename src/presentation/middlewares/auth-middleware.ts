import { AccessDeniedError } from '@presentation/errors'
import { forbidden } from '@presentation/helpers/http/http-helper'
import { HttpRequest, httpResponse, Middleware } from '@presentation/protocols'

export class AuthMiddleware implements Middleware {
  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    return forbidden(new AccessDeniedError())
  }
}
