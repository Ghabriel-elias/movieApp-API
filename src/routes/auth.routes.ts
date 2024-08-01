import express from 'express'
import { deleteUserAccount, register, verifyPassword } from '../controllers/authController'
import { authMiddleware, editUserMiddleware, generateToken } from '../middlewares/authMiddlewares'
import { validateFieldsUser, verifyFieldsLogin, verifyFieldsRegister } from '../middlewares/validateFieldsMiddleware'

export const authRouter = express.Router()

authRouter.post('/register', verifyFieldsRegister, register)
authRouter.post('/login', verifyFieldsLogin, generateToken)
authRouter.post('/check', authMiddleware, verifyPassword)

authRouter.patch('/edit', authMiddleware, validateFieldsUser, editUserMiddleware, generateToken)
authRouter.delete('/delete', authMiddleware, deleteUserAccount)
