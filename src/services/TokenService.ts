import { Service } from 'typedi'
import jwt from 'jsonwebtoken'

@Service()
export class TokenService {
  generateToken(payload: object): string {
    const secretKey = process.env.JWT_SECRET || 'defaultSecret'
    return jwt.sign(payload, secretKey, { expiresIn: '1h' })
  }

  verifyToken(token: string): any {
    const secretKey = process.env.JWT_SECRET || 'defaultSecret'
    return jwt.verify(token, secretKey)
  }

  decodeToken(token: string) {
    return jwt.decode(token)
  }
}
