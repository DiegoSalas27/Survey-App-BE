import { httpResponse } from '../protocols/http.interface';

export const badRequest = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error,
});
