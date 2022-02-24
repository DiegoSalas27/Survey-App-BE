import { adaptRoute } from '@main/adapters/express/express-route-adapter'
import { makeAddSurveyController } from '@main/factories/controllers/add-survey/add-survey-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adaptRoute(makeAddSurveyController()))
}
