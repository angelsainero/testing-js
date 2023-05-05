import Users from './Users.js'
import axios from 'axios'

jest.mock('axios')

// axios.get = () => {}
// axios.post = () => {}
// axios.put = () => {}

describe('Users class', () => {
    describe.skip('Without mocking', () => {
        it('should return an array of 10 users', async () => {
            expect.assertions(2)
            try {
                const users = await Users.all()
                expect(users).toBeArray()
                expect(users).toHaveLength(10)
            } catch (e) {

            }
        })
        it('should return username=Samantha for users[2]', async () => {
            expect.assertions(1)
            try {
                const users = await Users.all()
                expect(users[2].username).toMatch('Samantha')
            } catch (e) {
            }
        })
    })

    describe('With mocks 👌', () => {
        beforeAll(() => {
            // configuración del mock
            const users = [
                { username: 'Jordi' },
                { username: 'Aran' },
                { username: 'Samantha' }
            ]
            const res = { data: users }
            axios.get.mockResolvedValue(res)
        })
        describe('Users.all()', () => {
            it('should return an array of users', async () => {
                expect.assertions(2)
                try {
                    const usersResponse = await Users.all()
                    expect(usersResponse).toBeArray()
                    expect(usersResponse).toHaveLength(3)
                } catch (e) {

                }
            })
            it('should return username=Samantha for users[2]', async () => {
                expect.assertions(1)
                try {
                    const users = await Users.all()
                    expect(users[2].username).toMatch('Samantha')
                } catch (e) {
                }
            })
        })
        describe('Users.create()', () => {
            it('should return the created user', async () => {
                // configurar nuestro mock
                const payload = {name: 'Billy'}
                axios.post.mockResolvedValue({data: payload})
                
                expect.assertions(1)
                try {
                    const createdUser = await Users.create(payload)
                    expect(createdUser).toMatchObject(payload)

                }catch(e){}
            })
        })

    })
})