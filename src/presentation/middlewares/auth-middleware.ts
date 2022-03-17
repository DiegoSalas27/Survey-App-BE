import { JsonWebTokenError } from 'jsonwebtoken'
import {
  AccessDeniedError,
  forbidden,
  HttpRequest,
  httpResponse,
  LoadAccountByToken,
  Middleware,
  ok,
  serverError
} from './auth-middleware-protocols'

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
      if (error instanceof JsonWebTokenError) {
        return forbidden(new AccessDeniedError())
      }
      return serverError(error)
    }
  }
}
