import { EmailValidator } from '@validation/protocols/email-validator.interface'

export class EmailValidatorSpy implements EmailValidator {
  isEmailValid = true
  email: string

  isValid(email: string): boolean {
    this.email = email
    return this.isEmailValid
  }
}
