import { v4 as uuidv4 } from 'uuid';
import { normalizeString } from '../utils/normalizeString';
import { calculateAverage } from '../utils/calculateAvarage';

const series = [
    {id: uuidv4(), name: 'American Horror History', releaseDate: '07-21-2013', ratingStar: 4.5, rating: [{comment: 'Achei a serie muito boa',ratingNote: 4.8,userId: '12'}, {comment: 'Achei a serie muito bosta',ratingNote: 1.2,userId: '122'}], posterUrl: 'qualquerLink', genres: ['mistery', 'horror']},
    {id: uuidv4(), name: 'The walking dead', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comment: 'Achei a serie mto boa',ratingNote: 5,userId: '12'}, {comment: 'Achei a serie muito bosta',ratingNote: 1,userId: '122'}], posterUrl: 'qualquerLink', genres: ['action', 'horror', ]},
    {id: uuidv4(), name: 'The bear', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comment: 'Achei a serie mto boa',ratingNote: 5,userId: '12'}, {comment: 'Achei a serie muito bosta',ratingNote: 1,userId: '122'}], posterUrl: 'qualquerLink', genres: ['romance', 'adventure']},
]

function getAllSeries() {
    return series
}

function getSeriesByGenre(genre: string) {
    return series.filter(serie => {
        return serie.genres.includes(genre)
    })
}

function getSerieIndexById(id: string) {
    return series.findIndex(serie => serie.id === id)
}

function addRating(serieId: string, ratingNote: number, comment: string, userId: string) {

    const serieIndex = getSerieIndexById(serieId)
    const newRating = {
        comment: comment,
        ratingNote: ratingNote,
        userId: userId
    }

    series[serieIndex].rating.push(newRating)

    const getAllRating = series[serieIndex].rating.map(rating => rating.ratingNote)

    const newRatingStart = calculateAverage(getAllRating)

    series[serieIndex].ratingStar = newRatingStart

    return series[serieIndex]
}

function searchSeries(name: string) {
    return series.filter(movie => normalizeString(movie.name).includes(normalizeString(name)))
}

export {getAllSeries, searchSeries, getSeriesByGenre, addRating}

