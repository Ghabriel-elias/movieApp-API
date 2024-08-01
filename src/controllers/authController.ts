import {Response, Request} from 'express'
import { createUser, deleteUser, getUserByEmail, updateUser } from '../models/usersModel';
import { UserProps } from '../interfaces/users';
import { HttpError } from '../erros/HttpError';
import bcrypt from 'bcrypt'

// POST /auth/register
function register(req: Request, res: Response) {
    const {name, email, password} = req.body as UserProps
    const newUserCreated = createUser(name, email, password, 'standard')
    res.json(newUserCreated)
}

// DELETE /auth/delete
function deleteUserAccount(req: Request, res: Response) {
    const id = req.user?.id
    const user = deleteUser(id)
    req.user = undefined
    res.json(user)
    req.destroy()
}

// POST /auth/check
function verifyPassword(req: Request, res: Response) {
    const email = req.user?.email
    const {password} = req.body as {password: string}
    const user = getUserByEmail(email)
    if(!user || !user.password) throw new HttpError(400, 'User does not exist')
    const checkPassword = bcrypt.compareSync(password, user.password) 
    if(!checkPassword) throw new HttpError(400, 'Invalid password')
    res.status(204).end()
}

export {register, deleteUserAccount, verifyPassword}