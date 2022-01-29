import { Request, Response, NextFunction } from 'express'

export const contentType = (req: Request, res: Response, next: NextFunction): void => {
    res.type('json') // force returning json as a response pattern
    next()
}