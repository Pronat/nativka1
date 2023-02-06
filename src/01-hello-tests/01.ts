
export function sum(a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}


export const spliter = (sentence: string) => {
    const res =  sentence.toLowerCase().split(" ")
    return res.filter(el => el !== '' && el !== '-')
}