const suma = require("./suma")
describe("funcion suma", () => {
    it("suma de valores 0 y 0 es 0", () => {
        expect(suma(0,0)).toBe(0)
    })
    // podemos anidar describes pero no test o it!!
    describe("suma de valores positivos", () => {
        test("sumar 1 más 2 es igual a 3", () => {
            expect(suma(1, 2)).toBe(3)

        })
        test("sumar 11 más 22 es igual a 33", () => {
            expect(suma(11, 22)).toBe(33)
        })

    })

    describe("suma de valores negativos", () => {
        it("sumar -1 más -2 es igual a -3", () => {
            expect(suma(-1, -2)).toBe(-3)
        })

        it("sumar -11 más -22 es igual a -33", () => {
            expect(suma(-11, -22)).toBe(-33)
        })
    })
})
