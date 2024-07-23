import express from 'express'
import { filterShows, getShows } from '../controllers/apiController'
import { getUsers } from '../models/usersModel'

export const showsRouter = express.Router()

// showsRouter.get('/', (req, res) => {
//     console.log('asd')
//     res.json(getUsers())
// })
showsRouter.get('/shows', getShows)
// torna o parâmetro opcional "?"
showsRouter.get('/shows/search=:search?', filterShows)
