import {Response, Request} from 'express'
import { getUserByEmail } from '../models/usersModel'
import { HttpError } from '../erros/HttpError'
import { UserProps } from '../interfaces/users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

function verifyFieldsRegister(req: Request, res: Response, next: () => void) {
    const {name, email, password, role} = req.body as UserProps
    const userAlreadyExist = getUserByEmail(email)
    if(userAlreadyExist) throw new HttpError(400, 'User Already Exist')
    if((!name || typeof name != 'string') || (!email || typeof email != 'string') || (!password || typeof password != 'string') || (!role || typeof role != 'string')) throw new HttpError(400, 'Invalid fields')
    
    next()
}

function verifyFieldsLogin(req: Request, res: Response, next: () => void) {
    const {email, password} = req.body as UserProps
    if(!password || typeof password != 'string') throw new HttpError(400, 'Invalid fields')
    const user = getUserByEmail(email)
    if(!user || !user.password) throw new HttpError(400, 'User does not exist')
    const checkPassword = bcrypt.compareSync(password, user.password) 
    if(!checkPassword) throw new HttpError(400, 'Invalid password')
    
    next()
}

function validateFieldsUser(req: Request, res: Response, next: () => void) {
    const {email, name, role} = req.body as UserProps
    if((!email || typeof email != 'string') || (!name || typeof name != 'string') || !role || typeof role != 'string') throw new HttpError(400, 'Invalid fields')
    const user = getUserByEmail(email)
    if(!user) throw new HttpError(400, 'User does not exist')    
    next()
}

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
    const {name, email, role} = req.body as UserProps
    const tokenApi = process.env.JWT_KEY
    if(!tokenApi) throw new HttpError(401, 'Invalid token')

    const token = jwt.sign({name, email, role}, tokenApi, {expiresIn: '1d'})

    res.json({token})
}

export {verifyFieldsRegister, verifyFieldsLogin, authMiddleware, generateToken, validateFieldsUser}