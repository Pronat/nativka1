import {UserType} from "./10";

function hairdrasser(u: UserType, power: number) {
    const copy = {...u}
    copy.hair = u.hair / power
}

test('reference type test', ()=> {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    hairdrasser(user, 2)

    expect(user.hair).toBe(16)
})