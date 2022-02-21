import { Express, Router } from 'express'
import fg from 'fast-glob'
// import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts'

  fg.sync(`**/src/main/routes/**routes.${ext}`).map(async file =>
    // const route = (await import(`../../../${file}`)).default
    // route(router)
    (await import(`../../../${file}`)).default(router)
  )

  // readdirSync(`${__dirname}/../routes`).map(async file => {
  //   if (file.includes('.test.')) {
  //     (await import(`../routes/${file}`)).default(router)
  //   }
  // })
}
