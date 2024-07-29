import express from 'express'
import { postRattingSeries, filterShows, getGenres, getMovies, getSeries, postRattingMovies } from '../controllers/apiController'
import { authMiddleware } from '../middlewares/authMiddlewares'
import { validateFieldsRatting } from '../middlewares/validateFieldsMiddleware'

export const apiRouter = express.Router()

apiRouter.get('/genres', getGenres)

apiRouter.get('/movies/:genre?', getMovies)

apiRouter.get('/series/:genre?', getSeries)

apiRouter.post('/series/rating', authMiddleware, validateFieldsRatting, postRattingSeries)

apiRouter.post('/movies/rating', authMiddleware, validateFieldsRatting, postRattingMovies)

apiRouter.get('/shows/search=:search?', filterShows)
