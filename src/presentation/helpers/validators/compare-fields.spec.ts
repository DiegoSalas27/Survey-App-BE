import { InvalidParamError } from '@presentation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
    return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('CompareFields Validation', () => {
  test('Should return a InvalidParamError if comparison fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'other_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return a value if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_avlue',
      fieldToCompare: 'any_avlue'
    })
    expect(error).toBeFalsy()
  })
})
