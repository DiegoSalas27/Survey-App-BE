import { InvalidParamError } from '../errors/invalid-param-error';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest, serverError } from '../helpers/http-helper';
import { Controller } from '../protocols/controller.interface';
import { EmailValidator } from '../protocols/email-validator.interface';
import { HttpRequest, httpResponse } from '../protocols/http.interface';

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
      return serverError()
    }
  }
}
