import { Request, Response } from 'express'

function getScope(authorizationHeader: string | undefined) {
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.split('Bearer ')[1]
    return token
  }
  return ''
}

type ExpressThingy = { req: Request, res: Response }
export const MainContexter = async ({ req }: ExpressThingy) => ({
  authScope: getScope(req.headers?.authorization)
})
