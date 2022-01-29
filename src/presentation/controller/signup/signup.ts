import { InvalidParamError, MissingParamError } from '@presentation/errors';
import { badRequest, ok, serverError } from '@presentation/helpers/http-helper';
import { AddAccount, Controller, EmailValidator, HttpRequest, httpResponse } from './signup-protocols';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;
  private readonly addAccount: AddAccount;

  constructor(emailValidatorStub: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidatorStub;
    this.addAccount = addAccount;
  }

  async handle(httpRequest: HttpRequest): Promise<httpResponse> {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isValid = this.emailValidator.isValid(email);
      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }

      const account = await this.addAccount.add({
        name,
        email,
        password,
      });

      return ok(account);
    } catch (error) {
      return serverError();
    }
  }
}
