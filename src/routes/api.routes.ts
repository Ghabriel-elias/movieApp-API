import express from 'express'
import { filterShows, getShows } from '../controllers/apiController'
import { getUsers } from '../models/usersModel'

export const apiRouter = express.Router()

// apiRouter.get('/', (req, res) => {
//     console.log('asd')
//     res.json(getUsers())
// })
apiRouter.get('/shows', getShows)
// torna o parâmetro opcional "?"
apiRouter.get('/shows/search=:search?', filterShows)
