import { makeLogControllerDecorator } from '@main/factories/decorators/log-controller-decorator-factory'
import { makeDbAddSurvey } from '@main/factories/usecases/add-survey/db-add-account-factory'
import { AddSurveyController } from '@presentation/controller/survey/add-survey/add-survey-controller'
import { Controller } from '@presentation/protocols'
import { makeAddSurveyValidation } from './add-survey-validation-factory'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
