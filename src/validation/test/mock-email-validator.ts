import { EmailValidator } from '@validation/protocols/email-validator.interface'

export const mockEmailValidator = (): EmailValidator => {
  // factory
  class EmailValidatorStub implements EmailValidator {
    // mocked object
    isValid(email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}
