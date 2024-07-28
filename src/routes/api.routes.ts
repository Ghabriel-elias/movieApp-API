import express from 'express'
import { filterShows, getGenres, getMovies, getSeries } from '../controllers/apiController'

export const apiRouter = express.Router()

apiRouter.get('/genres', getGenres)

apiRouter.get('/movies/:genre?', getMovies)

apiRouter.get('/series/:genre?', getSeries)

apiRouter.get('/shows/search=:search?', filterShows)
