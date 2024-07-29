import { v4 as uuidv4 } from 'uuid';
import { normalizeString } from '../utils/normalizeString';
import { calculateAverage } from '../utils/calculateAvarage';

const movies = [
    {id: uuidv4(), name: 'Godzila', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comment: 'Achei o filme muito bom',ratingNote: 4.8,userId: '12'}, {comment: 'Achei o filme muito bosta',ratingNote: 1.2,userId: '122'}], posterUrl: 'qualquerLink', genres: ['action', 'adventure']},
    {id: uuidv4(), name: 'the Vingadores', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comment: 'Achei o filme muito bom',ratingNote: 5,userId: '12'}, {comment: 'Achei o filme muito bosta',ratingNote: 1,userId: '122'}], posterUrl: 'qualquerLink', genres: ['action', 'adventure', ]},
    {id: uuidv4(), name: 'Panico', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comment: 'Achei o filme muito bom',ratingNote: 5,userId: '12'}, {comment: 'Achei o filme muito bosta',ratingNote: 1,userId: '122'}], posterUrl: 'qualquerLink', genres: ['horror', 'mistery']},
]

function getAllMovies() {
    return movies
}

function getMoviesByGenre(genre: string) {
    return movies.filter(movie => {
        return movie.genres.includes(genre)
    })
}

function getMovieIndexById(id: string) {
    return movies.findIndex(movie => movie.id === id)
}

function addRatingMovies(movieId: string, ratingNote: number, comment: string, userId: string) {

    const serieIndex = getMovieIndexById(movieId)
    const newRating = {
        comment: comment,
        ratingNote: ratingNote,
        userId: userId
    }

    movies[serieIndex].rating.push(newRating)

    const getAllRating = movies[serieIndex].rating.map(rating => rating.ratingNote)

    const newRatingStart = calculateAverage(getAllRating)

    movies[serieIndex].ratingStar = newRatingStart

    return movies[serieIndex]
}


function searchMovie(name: string) {
    return movies.filter(movie => normalizeString(movie.name).includes(normalizeString(name)))
}

export {getAllMovies, searchMovie, getMoviesByGenre, addRatingMovies}

