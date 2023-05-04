module.exports = class Carrito {
    items = [];
    getTotalItems() {
        return this.items.length
    }
    addItem(item) {
        if (typeof item !== 'object') {
            throw new Error('item must be an object')
        }
        if (!item.price || !item.name) {
            throw new Error('item must be an object with price and name')
        }
        this.items.push(item)
    }
    getTotalCheckout() {
        return this.items.reduce((prev, curr) => prev += curr.price, 0)
    }
}