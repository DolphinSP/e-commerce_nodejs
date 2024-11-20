import { Request, Response, NextFunction } from 'express'

export const injectServices = (req: Request, _: Response, next: NextFunction) => {
    //TODO: Validate token
    next()
}
