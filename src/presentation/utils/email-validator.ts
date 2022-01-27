import { EmailValidator } from '@presentation/protocols/email-validator.interface'

export class EmailValidatorAdapter implements EmailValidator {
    isValid(email: string): boolean {
        return false;
    }
}
