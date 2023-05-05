import Carrito from './Carrito.js'

describe('Testing class Carrito', () => {

    let carrito
    const nigiriItem = {
        name: 'Nigiri',
        price: 1.6
    }
    const bottleItem = {
        name: 'Water',
        price: 1
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
            const nigiriAdded = carrito.addItem(nigiriItem)
            expect(carrito.items).toContainEqual(nigiriAdded)
        })
        it('should not contain an empty object when not adding an item', () => {
            expect(carrito.items).not.toContain({})
        })
        it('should throw an error if an item has no price', () => {
            expect(() => carrito.addItem({})).toThrow()
            // No funciona así, debemos pasarle un callback!!
            // expect(carrito.addItem('foo')).toThrow()
            expect(() => carrito.addItem('foo')).toThrow()
        })
        it('should throw an error if the item is not an object', () => {
            expect(() => carrito.addItem('foo')).toThrow()
            expect(() => carrito.addItem(true)).toThrow()
            expect(() => carrito.addItem(undefined)).toThrow()
            expect(() => carrito.addItem()).toThrow()
        })
        it('should throw an error when item is not an object saying "item must be an object"', () => {
            expect(() => carrito.addItem('foo')).toThrow('item must be an object')
            expect(() => carrito.addItem(true)).toThrow('item must be an object')
            expect(() => carrito.addItem(undefined)).toThrow('item must be an object')
            expect(() => carrito.addItem()).toThrow('item must be an object')
        })
        it('should throw an error saying "item must be an object with price and name" when adding non standard items objects', () => {
            // item standard === {name: '', price: 0}
            expect(() => carrito.addItem({})).toThrow('item must be an object with price and name')
            expect(() => carrito.addItem({names: 'foo', prices: 33})).toThrow('item must be an object with price and name')
            expect(() => carrito.addItem({names: 'foo', price: 33})).toThrow('item must be an object with price and name')
            expect(() => carrito.addItem({name: 'foo', prices: 33})).toThrow('item must be an object with price and name')
        })
        it('should not throw an error when adding a bottle item', () => {
            expect(() => carrito.addItem(bottleItem)).not.toThrow()
        })
    })
    describe('Testing getTotalCheckout', () => {
        it('should return 1.6 after adding 1 nigiri', () => {
            carrito.addItem(nigiriItem)
            expect(carrito.getTotalCheckout()).toEqual(1.6)
        })
        it('should return 3.2 after adding 2 nigiri', () => {
            carrito.addItem(nigiriItem)
            carrito.addItem(nigiriItem)
            expect(carrito.getTotalCheckout()).toEqual(3.2)
        })
        it('should return 2.6 after adding 1 nigiri and 1 bottle', () => {
            carrito.addItem(nigiriItem)
            carrito.addItem(bottleItem)
            expect(carrito.getTotalCheckout()).toEqual(2.6)
        })
        it('should return 0 if carrito is empty', () => {
            expect(carrito.getTotalCheckout()).toEqual(0)
        })
    })
    describe('Testing removeItem', () => {
        // pista: Deberéis alterar el comportamiento de addItem para generar elementos únicos en la lista
        it('Should return an empty array after adding 1 nigiri and removing 1 nigiri', () => {
            let nigiriAdded = carrito.addItem(nigiriItem)
            carrito.removeItem(nigiriAdded)
            expect(carrito.items).toHaveLength(0)
        })
        it('Should return an array with 1 water array after adding 1 nigiri, 1 water and removing 1 nigiri', () => {
            let nigiriAdded = carrito.addItem(nigiriItem)
            let waterAdded = carrito.addItem(bottleItem)
            carrito.removeItem(nigiriAdded)
            expect(carrito.items).toHaveLength(1)
            expect(carrito.items).toContainEqual(waterAdded)
        })
        it('Should return an array with 1 nigiri array after adding 2 nigiri, and removing 1 nigiri', () => {
            let nigiri1 = carrito.addItem(nigiriItem)
            let nigiri2 = carrito.addItem(nigiriItem)
            carrito.removeItem(nigiri1)
            expect(carrito.items).toHaveLength(1)
            expect(carrito.items).toContainEqual(nigiri2)
        })
    })
})