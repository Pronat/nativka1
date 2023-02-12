import {oldAges} from "./04";

test('check age mpre 99', ()=> {
    const ages = [18, 24, 100, 5, 1, 53, 76, 78]

    const oldAges2 = oldAges(ages)
    expect(oldAges2.length).toBe(1)
})