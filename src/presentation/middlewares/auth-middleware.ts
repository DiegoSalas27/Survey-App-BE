import { LoadAccountByToken } from '@domain/usecases/load-account-by-token'
import { AccessDeniedError } from '@presentation/errors'
import { forbidden, ok, serverError } from '@presentation/helpers/http/http-helper'
import { HttpRequest, httpResponse, Middleware } from '@presentation/protocols'

export class AuthMiddleware implements Middleware {
  constructor(private readonly loadAccountByToken: LoadAccountByToken, private readonly role?: string) {}

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken, this.role)
        if (account) {
          return ok({ accountId: account.id })
        }
      }

      return forbidden(new AccessDeniedError())
    } catch (error: any) {
      return serverError(error)
    }
  }
}