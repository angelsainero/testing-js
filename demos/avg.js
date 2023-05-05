export const avg = (array) => {
    return array.reduce((prev, curr) => (prev + curr), 0) / array.length
}