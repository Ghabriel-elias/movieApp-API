import {Request, Response} from 'express'
import { HttpError } from '../erros/HttpError'

export function errorMiddleware (error: Error, req: Request, res: Response, next: () => void) {
  if(error) {
    if(error instanceof HttpError) {
      res.status(error.status).json({message: error.message})
    } else {
      res.status(400).json({message: error.message})
    }
  } else {
    next()
  }
}
