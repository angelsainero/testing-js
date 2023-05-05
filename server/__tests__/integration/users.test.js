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
})