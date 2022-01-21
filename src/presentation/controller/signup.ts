import { MissingParamError } from '../errors/missing-param-error';
import { httpResponse, HttpRequest } from '../protocols/http.interface';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller.interface';
import { EmailValidator } from '../protocols/email-validator.interface';
import { InvalidParamError } from '../errors/invalid-param-error';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidatorStub: EmailValidator) {
    this.emailValidator = emailValidatorStub;
  }

  handle(httpRequest: HttpRequest): httpResponse {
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
  }
}
