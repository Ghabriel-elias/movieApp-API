import { HttpError } from "../erros/HttpError";
import { getAllGenres } from "../models/genreModel";
import { getAllMovies, getMoviesByGenre, searchMovie } from "../models/moviesModel";
import { Request, Response } from 'express';
import { getAllSeries, getSeriesByGenre, searchSeries } from "../models/seriesModel";

// GET /api/genres
function getGenres(req: Request, res: Response) {
    const genres = getAllGenres()
    res.json(genres)
}

// GET /api/movies/:genre?
function getMovies(req: Request, res: Response) {
    const {genre} = req.params as {genre?: string}
    if(genre && genre != 'all') {
        res.json(getMoviesByGenre(genre))
    } else {
        res.json(getAllMovies())
    }
}

// GET /api/movies/:genre?
function getSeries(req: Request, res: Response) {
    const {genre} = req.params as {genre?: string}
    if(genre && genre != 'all') {
        res.json(getSeriesByGenre(genre))
    } else {
        res.json(getAllSeries())
    }
}

// GET /api/shows/search=:search?
function filterShows(req: Request, res: Response) {
    const searchTerm = req.params.search
    if(!searchTerm) throw new HttpError(400, 'Invalid search term')
    const moviesFilter = searchMovie(searchTerm)
    const seriesFilter = searchSeries(searchTerm)
    const response = {
        series: seriesFilter,
        movies: moviesFilter
    }
    res.json(response)
}

export {getMovies, filterShows, getGenres, getSeries}

