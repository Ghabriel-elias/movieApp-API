import express from 'express'
import { getShows } from '../controllers/showsController'

export const api = express()

api.get('/shows', getShows)