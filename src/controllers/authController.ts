import {Response, Request} from 'express'
import { createUser, deleteUser, updateUser } from '../models/usersModel';
import { UserProps } from '../interfaces/users';

// POST /auth/register
function register(req: Request, res: Response) {
    const {name, email, password} = req.body as UserProps
    const newUserCreated = createUser(name, email, password, 'standard')
    res.json({newUserCreated})
}

// PATCH /auth/edit
function editUserAccount(req: Request, res: Response) {
    const {email, name, role} = req.body as UserProps
    const id = req.user?.id
    const user = updateUser(id, name, email, role)
    res.json(user)
}

// DELETE /auth/delete
function deleteUserAccount(req: Request, res: Response) {
    const id = req.user?.id
    const user = deleteUser(id)
    req.user = undefined
    res.json(user)
    req.destroy()
}


export {register, deleteUserAccount, editUserAccount}