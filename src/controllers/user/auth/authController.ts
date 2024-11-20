import { Request, Response } from 'express'
import {BaseController} from "../../baseController";

export class AuthController extends BaseController {
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            // Find user by email
            const user = await this.userRepository.findByEmail(email)
            if (!user) return res.status(404).json({ error: 'Email not found' })

            // Check password
            const isCorrectPassword = await this.hashService.comparePasswords(password, user.password)
            if (!isCorrectPassword) return res.status(401).json({ error: 'Invalid password' })

            // Generate token
            const payload = {
                iss: process.env.ISSUER || 'default-issuer',
                sub: user.username,
                aud: process.env.AUDIENCE || 'default-audience',
                scopes: ['read:data', 'write:data']
            }
            const token = this.tokenService.generateToken(payload)

            res.json({ token, user })
        } catch (error) {
            console.error('Login error:', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    async register(req: Request, res: Response) {
        try {
            const { name, username, email, password } = req.body

            // Validate email
            if (!this.validationService.isValidEmail(email)) {
                return res.status(400).json({ error: 'Invalid email address' })
            }

            // Hash password
            const hashedPassword = await this.hashService.hashPassword(password)

            // Save user to database
            const user = await this.userRepository.save({
                name,
                username,
                email,
                password: hashedPassword
            })

            // Send registration email
            if (this.sendEmailService.isReady) {
                await this.sendEmailService.sendEmail({
                    from: process.env.EMAIL_USER || 'no-reply@mail.com',
                    to: email,
                    subject: 'Registration Complete',
                    text: 'Your registration is complete. Welcome aboard!'
                })
            }

            res.status(201).json({ message: 'User registered successfully', user })
        } catch (error) {
            console.error('Registration error:', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    async forgetPassword(req: Request, res: Response) {
        try {
            const { email } = req.body

            // Find user by email
            const user = await this.userRepository.findByEmail(email)
            if (!user) return res.status(404).json({ error: 'Email not found' })

            // Generate password reset token
            const token = this.tokenService.generateToken({ email })

            // Send password reset email
            if (this.sendEmailService.isReady) {
                await this.sendEmailService.sendEmail({
                    from: process.env.EMAIL_USER || 'no-reply@mail.com',
                    to: email,
                    subject: 'Password Reset Request',
                    text: `Use this token to reset your password: ${token}`
                })
            }

            res.status(200).json({ message: 'Password reset email sent' })
        } catch (error) {
            console.error('Password reset error:', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    async protectedRoute(req: Request, res: Response) {
        try {
            const authHeader = req.headers.authorization
            if (!authHeader) return res.status(401).json({ error: 'Unauthorized' })

            const token = authHeader.split(' ')[1]
            const decoded = this.tokenService.verifyToken(token)
            res.json({ message: 'You are authorized', user: decoded })
        } catch (error) {
            console.error('Authorization error:', error)
            res.status(401).json({ error: 'Invalid or expired token' })
        }
    }
}
