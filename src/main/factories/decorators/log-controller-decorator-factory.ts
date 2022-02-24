import { LogMongoRepository } from '@infrastructure/db/mongodb/log/log-mongo-repository'
import { LogControllerDecorator } from '@main/decorators/log-controller-decorator'
import { Controller } from '@presentation/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logErrorRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logErrorRepository)
}
