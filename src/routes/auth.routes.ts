import express from 'express'
import { register } from '../controllers/authController'
import { generateToken, verifyFieldsLogin, verifyFieldsRegister } from '../middlewares/authMiddlewares'

export const authRouter = express()

authRouter.get('/register', verifyFieldsRegister, register)
authRouter.get('/login', verifyFieldsLogin, generateToken)
