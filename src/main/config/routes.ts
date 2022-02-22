import { Express, Router } from 'express'
import fg from 'fast-glob'
// import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  const ext = process.env.NODE_ENV === 'production' ? '**/main/routes/**routes.js' : '**/src/main/routes/**routes.ts'
  const backPath = process.env.NODE_ENV === 'production' ? '../../' : '../../../'

  fg.sync(ext).map(async file => {
    // const route = (await import(`../../../${file}`)).default
    // route(router)

    if (process.env.NODE_ENV === 'production') {
      file = file.substring(file.indexOf('/') + 1)
    }

    ;(await import(`${backPath}${file}`)).default(router)
  })

  // readdirSync(`${__dirname}/../routes`).map(async file => {
  //   if (file.includes('.test.')) {
  //     (await import(`../routes/${file}`)).default(router)
  //   }
  // })
}
