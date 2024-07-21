import { v4 as uuidv4 } from 'uuid';

const shows = [
    {id: uuidv4(), name: 'Godzila', releaseDate: '07-21-2021', ratingNote: 4.5, ratingComments: ['Achei o filme muito bom'], posterUrl: 'qualquerLink'}
]

function getAllShows() {
    return shows
}

function searchShow(name: string) {
    return shows.filter(show => show.name === name)
}

export {getAllShows, searchShow}

