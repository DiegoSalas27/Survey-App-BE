import { InvalidParamError, MissingParamError } from '@presentation/errors';
import { badRequest, serverError } from '@presentation/helpers/http-helper';
import { Controller, EmailValidator, HttpRequest, httpResponse } from '@presentation/protocols';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidatorStub: EmailValidator) {
    this.emailValidator = emailValidatorStub;
  }

  handle(httpRequest: HttpRequest): httpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email);
      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }

      return badRequest(new MissingParamError('name'));
    } catch (error) {
      return serverError();
    }
  }
}
