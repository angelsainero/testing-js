module.exports = class Carrito {
    items = [];
    getTotalItems() {
        return this.items.length
    }
    addItem(item) {
        this.items.push(item)
    }
    getTotalCheckout() {
        return this.items.reduce((prev, curr) => prev += curr.price, 0)
    }
}