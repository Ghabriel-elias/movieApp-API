import express from 'express'
import { deleteUserAccount, editUserAccount, register } from '../controllers/authController'
import { authMiddleware, generateToken } from '../middlewares/authMiddlewares'
import { validateFieldsUser, verifyFieldsLogin, verifyFieldsRegister } from '../middlewares/validateFieldsMiddleware'

export const authRouter = express.Router()

authRouter.post('/register', verifyFieldsRegister, register)
authRouter.post('/login', verifyFieldsLogin, generateToken)

authRouter.patch('/edit', authMiddleware, validateFieldsUser, editUserAccount)
authRouter.delete('/delete', authMiddleware, deleteUserAccount)
