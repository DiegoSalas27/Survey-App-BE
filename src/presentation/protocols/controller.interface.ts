import { HttpRequest, httpResponse } from './http.interface';

export interface Controller {
    handle (httpRequest: HttpRequest): httpResponse
}