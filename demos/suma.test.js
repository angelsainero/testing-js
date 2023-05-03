import suma from "./suma"
describe("funcion suma", () => {
    it("suma de valores 0 y 0 es 0", () => {
        expect(suma(0, 0)).toBe(0)
    })
    // podemos anidar describes pero no test o it!!
    describe("suma de valores positivos", () => {
        test("sumar 1 más 2 es igual a 3", () => {
            expect(suma(1, 2)).toEqual(3)
            expect(suma(1, 2)).toBe(3)

        })
        test("sumar 11 más 22 es igual a 33", () => {
            expect(suma(11, 22)).toBe(33)
        })
        it("sumar 1.1000000 y 2.230404 es aproximadamente a 3.33", () => {
            // toBeCloseTo para trabajar con decimales aproximados
            expect(suma(1.1000000, 2.230404)).toBeCloseTo(3.33, 2)
            expect(suma(1.1000000, 2.230404)).not.toBeCloseTo(3.33, 5)
        })
        it("sumar 1 y 2 es mayor que 2", () => {
            expect(suma(1,2)).toBeGreaterThan(2)
        })
        it("sumar 1 y 2 es mayor o igual que 3", () => {
            expect(suma(1,2)).toBeGreaterThanOrEqual(3)
        })
        it.todo("sumar 1 y 2 es menor que 4")
        it.todo("sumar 1 y 2 es menor o igual que 3")
        //toBeTruthy() es lo mismo que toBe(true)
        

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
