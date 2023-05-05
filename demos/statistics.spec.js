import {avg, stdDev} from './statistics.js'
import * as statistics from './statistics.js'

describe("Testing funcion avg", () => {
    it('should return 1 to input array [1,1]', () => {
        expect(avg([1,1])).toStrictEqual(1)
    })
    it('should return NaN to input array []', () => {
        // son idénticas comprobaciones
        expect(avg([])).toBeNaN()
        expect(avg([])).toBe(NaN)
    })
    it('should return a positive number for any input array with positive values', () => {
        expect(avg([1,2,3])).toBeGreaterThanOrEqual(0)
        expect(avg([0])).toBeGreaterThanOrEqual(0)
        expect(avg([0,1])).toBeGreaterThanOrEqual(0)
        expect(avg([0,1,9389848,938483853988989348])).toBeGreaterThanOrEqual(0)
        expect(avg([0,1,2])).toBePositive()
    })
})

describe("Testing funcion stdDev", () => {
    it('should return 0 to input array [1,1]', () => {
        expect(stdDev([1,1])).toEqual(0)
    })
    // stdDev de [1,2,3] = 0.81649658092773
    it('should return 0.81649 to [1,2,3]', () => {
        expect(stdDev([1,2,3])).not.toEqual(0.81649)
        expect(stdDev([1,2,3])).toBeCloseTo(0.81649, 4)
    })
    // NO PODEMOS HACERLO ASI 🤯!!!
    it.skip('should call 2 times avg', () => {
        const spy = jest.spyOn(statistics, 'avg')
        const result = statistics.stdDev([0,1,2])
        expect(spy).toHaveBeenCalledTimes(2)
    })
})