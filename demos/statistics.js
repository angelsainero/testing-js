export const avg = (array) => {
    return array.reduce((prev, curr) => (prev + curr), 0) / array.length
}

export const stdDev = (array) => {
    const mean = avg(array)
    const diffArray = array.map(el => (el-mean)*(el-mean))
    return Math.sqrt(avg(diffArray))
}