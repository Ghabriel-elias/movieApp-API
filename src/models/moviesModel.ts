import { v4 as uuidv4 } from 'uuid';
import { normalizeString } from '../utils/normalizeString';

const movies = [
    {id: uuidv4(), name: 'Godzila', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei o filme muito bom',ratingNode: 4.8,userId: 12}, {comments: 'Achei o filme muito bosta',ratingNode: 1.2,userId: 122}], posterUrl: 'qualquerLink', genres: ['action', 'adventure']},
    {id: uuidv4(), name: 'the Vingadores', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei o filme muito bom',ratingNode: 5,userId: 12}, {comments: 'Achei o filme muito bosta',ratingNode: 1,userId: 122}], posterUrl: 'qualquerLink', genres: ['action', 'adventure', ]},
    {id: uuidv4(), name: 'Panico', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei o filme muito bom',ratingNode: 5,userId: 12}, {comments: 'Achei o filme muito bosta',ratingNode: 1,userId: 122}], posterUrl: 'qualquerLink', genres: ['horror', 'mistery']},
]

function getAllMovies() {
    return movies
}

function getMoviesByGenre(genre: string) {
    return movies.filter(movie => {
        return movie.genres.includes(genre)
    })
}

function searchMovie(name: string) {
    return movies.filter(movie => normalizeString(movie.name).includes(normalizeString(name)))
}

export {getAllMovies, searchMovie, getMoviesByGenre}

