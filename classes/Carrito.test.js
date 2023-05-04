import Carrito from './Carrito.js'

describe('Testing class Carrito', () => {

    let carrito
    const nigiriItem = {
        name: 'Nigiri',
        price: 1.6
    }
    beforeEach(() => {
        carrito = new Carrito()
    })
    describe('Testing getTotalItems', () => {
        it('should return 0 at initialization', () => {
            expect(carrito.getTotalItems()).toEqual(0)
        })
        it('should return 1 after adding 1 product', () => {
            carrito.addItem(nigiriItem)
            expect(carrito.getTotalItems()).toBe(1)
        })
        it('should return 2 after adding 2 products', () => {
            carrito.addItem(nigiriItem)
            carrito.addItem(nigiriItem)
            expect(carrito.getTotalItems()).toBe(2)
        })
        afterEach(() => {
            carrito = undefined
        })
    })
    describe('Testing addItem', () => {
        it('should contain the added item in carrito.items array', () => {
            carrito.addItem(nigiriItem)
            expect(carrito.items).toContainEqual(nigiriItem)
        })
        it('should not contain an empty object when not adding an item', () => {
            expect(carrito.items).not.toContain({})
        })
    })
})