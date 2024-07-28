import { v4 as uuidv4 } from 'uuid';

const genres = [
  {id: uuidv4(), name: 'Todos', genre: 'all'},
  {id: uuidv4(), name: 'Ação', genre: 'action'},
  {id: uuidv4(), name: 'Aventura', genre: 'adventure'},
  {id: uuidv4(), name: 'Animação', genre: 'animation'},
  {id: uuidv4(), name: 'Terror', genre: 'horror'},
  {id: uuidv4(), name: 'Romance', genre: 'romance'},
  {id: uuidv4(), name: 'Mistério', genre: 'mistery'},
]

export function getAllGenres() {
    return genres
}

