import { v4 as uuidv4 } from 'uuid';

const shows = [
    {id: uuidv4(), name: 'Godzila', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei o filme muito bom',ratingNode: 4.8,userId: 12}, {comments: 'Achei o filme muito bosta',ratingNode: 1.2,userId: 122}], posterUrl: 'qualquerLink'},
    {id: uuidv4(), name: 'Vingadores', releaseDate: '07-21-2021', ratingStar: 4.5, rating: [{comments: 'Achei o filme muito bom',ratingNode: 5,userId: 12}, {comments: 'Achei o filme muito bosta',ratingNode: 1,userId: 122}], posterUrl: 'qualquerLink'}
]

function calculateAverage(ratingNotes: number[]) {
    return ratingNotes.reduce((accum, value) => accum += value, 0).toFixed(1)
}

function getAllShows() {
    return shows
}

function searchShow(name: string) {
    return shows.filter(show => show.name === name)
}

export {getAllShows, searchShow}

