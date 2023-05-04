import {successfulRequest, failedRequest} from './promises.js'

describe('callback style', () => {
    it('should fail with failedRequest', (done) => {
        failedRequest().catch(e => {
            expect(e.message).toMatch(/403/)
            done()
        })
    })
    it.todo('should succeed with successfulRequest')
})

describe('promise style', () => {
    it('should return 200 statusCode with successfulRequest', () => {
        // expect.assertions muy útil para testear código async
        expect.assertions(1)
        // imprescindible devolver la promesa
        return successfulRequest().then(response => {
            expect(response.status).toEqual(200)
        })
    })
    it.todo('should return 403 status code with failedRequest')
})

describe('async/await style', () => {
    it('should return 200 statusCode with successfulRequest', async () => {
        expect.assertions(1)
        try {
            const response = await successfulRequest()
            expect(response.status).toEqual(200)
        }catch(e) {

        }
    })
    it.todo('should return 403 status code with failedRequest')
})

describe('.resolves/.rejects style', () => {
    it('should fail with failedRequest', () => {
        expect.assertions(1)
        return expect(failedRequest).rejects.toThrow(/failed/)
    })
    it.todo('should return status 200 for successfulRequest')
})