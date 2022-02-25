import { LoadAccountByToken } from '@domain/usecases/load-account-by-token'
import { AccessDeniedError } from '@presentation/errors'
import { forbidden } from '@presentation/helpers/http/http-helper'
import { HttpRequest, httpResponse, Middleware } from '@presentation/protocols'

export class AuthMiddleware implements Middleware {
  constructor(private readonly loadAccountByToken: LoadAccountByToken) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      await this.loadAccountByToken.load(accessToken)
    }

    return forbidden(new AccessDeniedError())
  }
}
