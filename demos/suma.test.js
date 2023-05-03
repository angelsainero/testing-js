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

    // .skip permite saltarnos tests o fragmentos de tests
    // .only cambia la lógica de ejecución de jest (por defecto se ejecutan todos los tests)
    // y ejecutará solamente aquellos tests que estén con .only
    describe.skip("suma de valores negativos", () => {
        it("sumar -1 más -2 es igual a -3", () => {
            expect(suma(-1, -2)).toBe(-3)
        })

        it("sumar -11 más -22 es igual a -33", () => {
            expect(suma(-11, -22)).toBe(-33)
        })

    })
    describe("sumar valores positivos y negativos", () => {
        it.todo("sumar 1 y -1 es 0")

    })
})
