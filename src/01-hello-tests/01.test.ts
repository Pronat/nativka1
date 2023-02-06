import {sum} from "./01";

test('Result of sum must be true', () => {
    let a = 2
    let b = 4

    let result = sum(a, b)

    expect(result).toBe(6)
})