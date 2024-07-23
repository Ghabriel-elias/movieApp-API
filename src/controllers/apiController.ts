import { HttpError } from "../erros/HttpError";
import { getAllShows, searchShow } from "../models/showsModel";
import { Request, Response } from 'express';

// GET /api/shows
function getShows(req: Request, res: Response) {
    const shows = getAllShows()
    res.json(shows)
}

// GET /api/shows/search=:search?
function filterShows(req: Request, res: Response) {
    const searchTerm = req.params.search
    if(!searchTerm) throw new HttpError(400, 'Invalid search term')
    const showsFilter = searchShow(searchTerm)
    res.json(showsFilter)
}

export {getShows, filterShows}

