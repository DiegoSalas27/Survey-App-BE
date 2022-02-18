import { Controller, HttpRequest } from '@presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  // with this adapter we decouple express from our controllers
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}

// if we were to change express by another framework we would just need to change this adapter
