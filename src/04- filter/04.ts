
const ages = [18, 24, 100, 5, 1, 53, 76, 78]


export const Filter = () => {
    const oldAges = ages.filter((el) => el > 99)
    console.log(oldAges)
    return
}
