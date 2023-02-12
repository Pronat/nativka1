import {ages, oldAges} from "./04";

test('check age more 99', ()=> {
    const ages = [18, 24, 100, 5, 1, 53, 76, 78]

    const oldAges2 = ages.filter((el) => el > 99)
    expect(oldAges2.length).toBe(1)
})
test('check price less 99', ()=> {
    const courses = [
        {title: 'CSS', price: 120},
        {title: 'HTML', price: 70},
        {title: 'React', price: 200},
    ]

    const courses2 = courses.filter((el) => el.price < 100)
    expect(courses2.length).toBe(1)
    expect(courses2[0].price).toBe(70)
})