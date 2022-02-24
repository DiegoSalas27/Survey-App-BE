import { HttpRequest, httpResponse } from './http.interface';

export interface Middleware {
    handle (httpRequest: HttpRequest): Promise<httpResponse>
}