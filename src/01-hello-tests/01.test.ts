import {mult, sum} from "./01";

test('Result of sum must be true', () => {
    let a = 2
    let b = 4
    let c = 1

    let result = sum(a, b)
    let result2 = sum(a, c)

    expect(result).toBe(6)
    expect(result2).toBe(3)
})

test('mult should be correct', () => {
    let a = 2
    let b = 4
    let c = 1

    let result = mult(a, b)
    let result2 = mult(a, c)
    expect(result).toBe(8)
    expect(result2).toBe(2)

})