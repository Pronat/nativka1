import {makeHairStyle, moveUser, UserType, UserWithLaptopType} from "./10";



test('reference type test', ()=> {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    user = awesomeUser


    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', ()=> {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }


    const movedUser = moveUser(user, 2)
    user = movedUser


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(user.address.title).toBe('Kiev')

})