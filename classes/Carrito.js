module.exports = class Carrito {
    items = [];
    getTotalItems() {
        return this.items.length
    }
    addItem(item) {
        this.items.push(item)
    }
}