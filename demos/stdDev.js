import {avg} from './avg.js'

export const stdDev = (array) => {
    const mean = avg(array) // es una propiedad de un objeto
    const diffArray = array.map(el => (el-mean)*(el-mean))
    return Math.sqrt(avg(diffArray))
}