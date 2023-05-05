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
        const id = Math.round(Math.random() * 10000000)
        const itemToAdd = {...item, id}
        this.items.push(itemToAdd);
        return itemToAdd
    }
    removeItem(item) {
        this.items = this.items.filter(elem => item.id !== elem.id)
    }

    getTotalCheckout() {
        return this.items.reduce((prev, curr) => prev += curr.price, 0)
    }
}