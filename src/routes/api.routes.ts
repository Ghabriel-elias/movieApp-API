import express from 'express'
import { filterShows, getShows } from '../controllers/showsController'
import { getUsers } from '../models/usersModel'

export const apiRouter = express()

// apenas para teste
apiRouter.get('/', (req, res) => {
    res.json(getUsers())
})
apiRouter.get('/shows', getShows)
// torna o parâmetro opcional "?"
apiRouter.get('/shows/search=:search?', filterShows)
