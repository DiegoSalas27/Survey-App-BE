import { Validation } from '@presentation/protocols'

export const mockValidation = (): Validation => {
  // factory
  class ValidationStub implements Validation {
    // mocked object
    validate(input: any): Error {
      // the input is generic for any request made
      return null
    }
  }
  return new ValidationStub()
}
