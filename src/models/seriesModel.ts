import { v4 as uuidv4 } from 'uuid';
import { normalizeString } from '../utils/normalizeString';

const series = [
    {id: uuidv4(), name: 'American Horror History', releaseDate: '07-21-2013', ratingStar: 4.5, rating: [{comments: 'Achei a serie muito boa',ratingNode: 4.8,userId: 12}, {comments: 'Achei a serie muito bosta',ratingNode: 1.2,userId: 122}], posterUrl: 'qualquerLink', genres: ['mistery', 'horror']},
    {id: uuidv4(), name: 'The walking dead', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei a serie mto boa',ratingNode: 5,userId: 12}, {comments: 'Achei a serie muito bosta',ratingNode: 1,userId: 122}], posterUrl: 'qualquerLink', genres: ['action', 'horror', ]},
    {id: uuidv4(), name: 'The bear', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei a serie mto boa',ratingNode: 5,userId: 12}, {comments: 'Achei a serie muito bosta',ratingNode: 1,userId: 122}], posterUrl: 'qualquerLink', genres: ['romance', 'adventure']},
]

function getAllSeries() {
    return series
}

function getSeriesByGenre(genre: string) {
    return series.filter(serie => {
        return serie.genres.includes(genre)
    })
}

function searchSeries(name: string) {
    return series.filter(movie => normalizeString(movie.name).includes(normalizeString(name)))
}

export {getAllSeries, searchSeries, getSeriesByGenre}

