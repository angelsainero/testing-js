export const avg = (array) => {
    return array.reduce((prev, curr) => (prev + curr), 0) / array.length
}

// si el coste es de avg es 1s, entonces stdDev es de 3s
export const stdDev = (array) => {
    const mean = avg(array) // es una constante
    const diffArray = array.map(el => (el-mean)*(el-mean))
    return Math.sqrt(avg(diffArray))
}