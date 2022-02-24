import { makeLogControllerDecorator } from '@main/factories/decorators/log-controller-decorator-factory'
import { makeDbAuthentication } from '@main/factories/usecases/authentication/db-authentication-factory'
import { LoginController } from '@presentation/controller/auth/login/login-controller'
import { Controller } from '@presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'

export const makeLoginController = (): Controller => {
  const loginController = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(loginController)
}
