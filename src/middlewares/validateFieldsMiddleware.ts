import {Request, Response} from 'express'
import { HttpError } from '../erros/HttpError';

interface BodyRatingProps {
  showId: string;
  ratingNote: number;
  comment: string;
}

export const validateFieldsRatting = (req: Request, res: Response, next: () => void) => {
  const {showId, ratingNote, comment} = req.body as BodyRatingProps
  if(
    (!showId || typeof showId != 'string') || 
    (!ratingNote || typeof ratingNote != 'number') || 
    (!comment || typeof comment != 'string')
  ) throw new HttpError(400, 'Invalid Fields')
  
  next()

}