import { httpResponse } from './http.interface'

export interface Middleware<T = any> {
  handle(httpRequest: T): Promise<httpResponse>
}
