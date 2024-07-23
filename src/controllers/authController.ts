import {Response, Request} from 'express'
import { createUser } from '../models/usersModel';
import { UserProps } from '../interfaces/users';

function register(req: Request, res: Response) {
    const {name, email, password, role} = req.body as UserProps
    const newUserCreated = createUser(name, email, password, role)
    res.json(newUserCreated)
}

export {register}