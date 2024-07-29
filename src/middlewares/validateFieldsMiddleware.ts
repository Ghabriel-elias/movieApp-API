import {Request, Response} from 'express'
import { HttpError } from '../erros/HttpError';
import { UserProps } from '../interfaces/users';
import { getUserByEmail } from '../models/usersModel';
import bcrypt from 'bcrypt'

interface BodyRatingProps {
  showId: string;
  ratingNote: number;
}

export const validateFieldsRatting = (req: Request, res: Response, next: () => void) => {
  const {showId, ratingNote} = req.body as BodyRatingProps
  if(
    (!showId || typeof showId != 'string') || 
    (!ratingNote || typeof ratingNote != 'number') 
  ) throw new HttpError(400, 'Invalid Fields')
  
  next()

}

export function verifyFieldsRegister(req: Request, res: Response, next: () => void) {
  const {name, email, password} = req.body as UserProps
  const userAlreadyExist = getUserByEmail(email)
  if(userAlreadyExist) throw new HttpError(400, 'User Already Exist')
  if((!name || typeof name != 'string') || (!email || typeof email != 'string') || (!password || typeof password != 'string')) throw new HttpError(400, 'Invalid fields')
  
  next()
}

export function verifyFieldsLogin(req: Request, res: Response, next: () => void) {
  const {email, password} = req.body as UserProps
  if(!password || typeof password != 'string') throw new HttpError(400, 'Invalid fields')
  const user = getUserByEmail(email)
  if(!user || !user.password) throw new HttpError(400, 'User does not exist')
  const checkPassword = bcrypt.compareSync(password, user.password) 
  if(!checkPassword) throw new HttpError(400, 'Invalid password')
  const userAccount = {
    id: user.id,
    email: user.email,
    name: user.name
  }
  req.user = userAccount
  next()
}

export function validateFieldsUser(req: Request, res: Response, next: () => void) {
  const {email, name, role} = req.body as UserProps
  if((!email || typeof email != 'string') || (!name || typeof name != 'string') || !role || typeof role != 'string') throw new HttpError(400, 'Invalid fields')
  const user = getUserByEmail(email)
  if(!user) throw new HttpError(400, 'User does not exist')    
  next()
}