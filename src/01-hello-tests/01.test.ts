import {mult, spliter, sum} from "./01";

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

test('Split function', () => {
    let sentence = "Hello my dear friend"
    let sentence2 = "Hello - my favourite  dear friend"

    let result = spliter(sentence)
    let result2 = spliter(sentence2)

    expect(result.length).toBe(4)
    expect(result[0]).toBe("hello")
    expect(result[1]).toBe("my")
    expect(result[2]).toBe("dear")
    expect(result[3]).toBe("friend")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("hello")
    expect(result2[1]).toBe("my")
    expect(result2[2]).toBe("favourite")
    expect(result2[3]).toBe("dear")
    expect(result2[4]).toBe("friend")
})