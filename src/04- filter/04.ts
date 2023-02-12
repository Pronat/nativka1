export const ages = [18, 24, 100, 5, 1, 53, 76, 78]
const oldAges = (age: number) => {
    return ages.filter((el) => el > 99)

}

export type CoursesType =
    { title: string, price: number }

const courses = [
    {title: 'CSS', price: 120},
    {title: 'HTML', price: 70},
    {title: 'React', price: 200},
]
const coursesCheap = (course: CoursesType) => {
    return courses.filter((el) => el.price < 100)
}

