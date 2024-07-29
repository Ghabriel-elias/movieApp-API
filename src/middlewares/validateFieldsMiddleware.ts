import {Request, Response} from 'express'
import { HttpError } from '../erros/HttpError';

interface BodyRatingProps {
  serieId: string;
  ratingNote: number;
  comment: string;
}

export const validateFieldsRatting = (req: Request, res: Response, next: () => void) => {
  const {serieId, ratingNote, comment} = req.body as BodyRatingProps
  if(
    (!serieId || typeof serieId != 'string') || 
    (!ratingNote || typeof ratingNote != 'number') || 
    (!comment || typeof comment != 'string')
  ) throw new HttpError(400, 'Invalid Fields')
  
  next()

}