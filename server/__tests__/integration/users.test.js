const request = require('supertest');
const app = require('../../app.js')

describe('Testing users endpoints', () => {
    describe('GET /users', () => {
        it('should receive an object users with 2 users', async () => {
            const response = await request(app).get('/users')

            expect(response.body).toHaveProperty('users')
            expect(response.body.users.length).toBeGreaterThanOrEqual(2)

        })
    })

    describe('GET /users/:id', () => {
        it('should return a user', async () => {
            expect.assertions(1)
            const response = await request(app).get('/users/1')
            expect(response.body).toHaveProperty('user')
        })
        it('should not return a 500 status code if id = -1', async () => {
            expect.assertions(1)
            const response = await request(app).get('/users/-1')
            expect(response.statusCode).toBe(500)
        })
        it('should return user {id:1} for id = 1', async() => {
            expect.assertions(1)
            const response = await request(app).get('/users/1')
            expect(response.body.user).toMatchObject({id: 1}) // podemos pasarle un objeto parcial, no hace falta todo el objeto entero
        })
    })
})