export function calculateAverage(ratingNotes: number[]) {
  return ratingNotes.reduce((accum, value) => accum += value, 0).toFixed(1)
}
