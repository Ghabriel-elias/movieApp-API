import express from 'express'
import { addRatingSeries, filterShows, getGenres, getMovies, getSeries } from '../controllers/apiController'
import { authMiddleware } from '../middlewares/authMiddlewares'
import { validateFieldsRatting } from '../middlewares/validateFieldsMiddleware'

export const apiRouter = express.Router()

apiRouter.get('/genres', getGenres)

apiRouter.get('/movies/:genre?', getMovies)

apiRouter.get('/series/:genre?', getSeries)

apiRouter.post('/series/rating', authMiddleware, validateFieldsRatting, addRatingSeries)

apiRouter.get('/shows/search=:search?', filterShows)
