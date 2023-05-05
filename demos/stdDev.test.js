import {stdDev} from './stdDev.js'
import * as avgModule from './avg.js'

// ASI SI, porque importamos TODO el módulo de avg y podemos montar el espía 👻
it('should call 2 times avg', () => {
    const spy = jest.spyOn(avgModule, 'avg')
    const result = stdDev([0,1,2])
    expect(spy).toHaveBeenCalledTimes(2)
})