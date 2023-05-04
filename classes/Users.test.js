import Users from './Users.js'

describe('Users class', () => {
    describe('Without mocking', () => {
        it('should return an array of 10 users', async () => {
            expect.assertions(2)
            try {
                const users = await Users.all()
                expect(users).toBeArray()
                expect(users).toHaveLength(10)
            }catch(e){
                
            }
        })
        it('should return username=Samantha for users[2]', async () => {
            expect.assertions(1)
            try {
                const users = await Users.all()
                expect(users[2].username).toMatch('Samantha')
            }catch(e){   
            }
        })
    })
})