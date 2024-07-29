import { HttpError } from "../erros/HttpError";
import { getAllGenres } from "../models/genreModel";
import { addRatingMovies, getAllMovies, getMoviesByGenre, searchMovie } from "../models/moviesModel";
import { Request, Response } from 'express';
import { addRatingSeries, getAllSeries, getSeriesByGenre, searchSeries } from "../models/seriesModel";

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

// GET /api/series/:genre?
function getSeries(req: Request, res: Response) {
    const {genre} = req.params as {genre?: string}
    if(genre && genre != 'all') {
        res.json(getSeriesByGenre(genre))
    } else {
        res.json(getAllSeries())
    }
}


interface BodyRatingProps {
    showId: string;
    ratingNote: number;
    comment?: string;
}

// POST /api/series/rating
function postRattingSeries(req: Request, res: Response) {
    const {showId, ratingNote, comment} = req.body as BodyRatingProps
    const userId = req.user?.id
    const serie = addRatingSeries(showId, ratingNote, userId, comment)
    res.json(serie)
}

// POST /api/movies/rating
function postRattingMovies(req: Request, res: Response) {
    const {showId, ratingNote, comment} = req.body as BodyRatingProps
    const userId = req.user?.id
    const serie = addRatingMovies(showId, ratingNote, userId, comment)
    res.json(serie)
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

export {getMovies, filterShows, getGenres, getSeries, postRattingSeries, postRattingMovies}

