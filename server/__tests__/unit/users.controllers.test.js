const userController = require('../../controllers/users.controllers.js')
const usersModel = require('../../models/users.js')

// Necesitamos mockear para evitar estar haciendo peticiones reales al modelo de DB
const axios = require('axios') // porque el modelo usa axios, en otros escenarios seria mongoose, etc.
const usersControllers = require('../../controllers/users.controllers.js')
jest.mock('axios')

describe('Testing users controllers', () => {
    describe('getAllUsers()', () => {
        let req, res, next
        beforeEach(() => {
            // configuracion del mock
            axios.get.mockResolvedValue({
                data: {
                    users: [{}, {}]
                }
            })
            // debemos preparar req, res y next para que el handler de la ruta funcione
            req = {}
            res = {json: jest.fn()}
            next = jest.fn()
            // PETA porque json debe ser una función mockeada o un espía
            // res = {json: () => {}}
        })
        it('must call users.find()', async () => {
            const spy = jest.spyOn(usersModel, 'find')
            
            expect.assertions(2)
            try {
                const response = await usersControllers.getAllUsers(req, res, next)
                expect(spy).toHaveBeenCalledOnce()
                expect(spy).toHaveBeenCalledOnceWith(undefined)
            } catch (e) {
            }
        })
        it('should call res.json', async () => {
            expect.assertions(2)
            try {
                const response = await usersControllers.getAllUsers(req, res, next)
                expect(res.json).toHaveBeenCalledOnce()
                expect(res.json).toHaveBeenCalledTimes(1)
            } catch (e) {
                console.error(e)
            }
        })
    })
    describe('getUser', () => {
        it.todo('getUser()')
    })

})