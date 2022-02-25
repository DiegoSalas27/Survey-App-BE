import { adaptMiddleware } from '@main/adapters/express-middleware-adapter'
import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeAddSurveyController } from '@main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeAuthMiddleware } from '@main/factories/middlewares/auth-middleware-factory'
import { Router } from 'express'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
}
