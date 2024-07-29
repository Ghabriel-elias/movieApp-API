import {Response, Request} from 'express'
import { getUserByEmail } from '../models/usersModel'
import { HttpError } from '../erros/HttpError'
import jwt from 'jsonwebtoken'

function authMiddleware(req: Request, res: Response, next: () => void) {
    const authHeader = req.headers.authorization
    if(!authHeader) throw new HttpError(401, 'User not authorized')
    const token = authHeader.split(' ')[1]
    const tokenApi = process.env.JWT_KEY
    if(!tokenApi) throw new HttpError(401, 'Invalid token')
    
    try {
        const decodedToken = jwt.verify(token, tokenApi)
        const user = getUserByEmail(decodedToken?.email)
        if(!user) throw new HttpError(401, 'Invalid user')

        const userAuthorized = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        req.user = userAuthorized
        next()
    } catch (error) {
        throw new HttpError(401, 'Invalid token')
    }
}

function generateToken(req: Request, res: Response, next: () => void) {
    const {email, id, name} = req.user || {}
    const tokenApi = process.env.JWT_KEY
    if(!tokenApi) throw new HttpError(401, 'Invalid token')

    const token = jwt.sign({name, email, id}, tokenApi, {expiresIn: '1d'})

    res.json({token, user: req.user})
}

export {authMiddleware, generateToken}