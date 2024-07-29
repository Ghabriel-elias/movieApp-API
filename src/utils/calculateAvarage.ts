export function calculateAverage(ratingNotes: number[]) {
  const sumRatingNote = Number(ratingNotes.reduce((accum, value) => accum += value, 0).toFixed(2))
  const avarage = Number((sumRatingNote / ratingNotes.length).toFixed(1))
  return avarage > 5 ? 5 : avarage
}