import { Router } from 'express'
import { AuthController } from './authController'

const router = Router()
const authController = new AuthController()

router.post('/login', (req, res) => authController.login(req, res))
router.post('/register', (req, res) => authController.register(req, res))
router.post('/forgotPassword', (req, res) => authController.forgetPassword(req, res))
router.get('/protected', (req, res) => authController.protectedRoute(req, res))


export const UserRoute = router
