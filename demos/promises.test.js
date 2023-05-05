import {successfulRequest, failedRequest} from './promises.js'

describe('callback style', () => {
    it('should fail with failedRequest', (done) => {
        failedRequest().catch(e => {
            expect(e.message).toMatch(/403/)
            done()
        })
    }, 10*1000)
    it('should succeed with successfulRequest', (done) => {
        expect.assertions(1)
        successfulRequest().then(response => {
            expect(response.status).toBe(200)
            done()
        })
    }, 10*1000)
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
    it('should return 403 status code with failedRequest', () => {
        expect.assertions(1)
        // imprescindible devolver la promesa
        return failedRequest().catch(e => {
            expect(e.response.status).toEqual(403)
        })
    })
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
    it('should return 403 status code with failedRequest', async () => {
        expect.assertions(1)
        try {
            await failedRequest();
        } catch(e){ 
            expect(e.response.status).toBeGreaterThanOrEqual(403)
        }
    })
})

describe('.resolves/.rejects style', () => {
    it('should fail with failedRequest', () => {
        expect.assertions(1)
        return expect(failedRequest).rejects.toThrow(/failed/)
    })
    it('should return status 200 for successfulRequest', () => {
        expect.assertions(1)
        return expect(successfulRequest()).resolves.toMatchObject({data: {}})
    })
})