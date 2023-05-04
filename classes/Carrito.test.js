import Carrito from './Carrito.js'

describe('Testing class Carrito', () => {
    describe('Testing getTotalItems', () => {
        it('should return 0 at initialization', () => {
            const carrito = new Carrito();
            expect(carrito.getTotalItems()).toEqual(0)
        })
        it('should return 1 after adding 1 product', () => {
            const carrito = new Carrito();
            carrito.addItem({
                name: 'Nigiri',
                price: 1.6
            })
            expect(carrito.getTotalItems()).toBe(1)
        })
        it('should return 2 after adding 2 products', () => {
            const carrito = new Carrito();
            carrito.addItem({
                name: 'Nigiri',
                price: 1.6
            })
            carrito.addItem({
                name: 'Nigiri',
                price: 1.6
            })
            expect(carrito.getTotalItems()).toBe(2)
        })
    })
    describe('Testing addItem', () => {
        it.todo('should contain the added item in carrito.items array')
    })
})