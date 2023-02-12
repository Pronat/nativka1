export const ages = [18, 24, 100, 5, 1, 53, 76, 78]
const oldAges = () => {
   const a = ages.filter((el) => el > 99)
    return a
}

const courses = [
    {title: 'CSS', price: 120},
    {title: 'HTML', price: 70},
    {title: 'React', price: 200},
]
const coursesCheap = () => {
    let c = courses.filter((el) => el.price < 100)
    return c
}

