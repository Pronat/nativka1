
function increaseAge(u:UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {
    let user:UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user)


    expect(user['age']).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user['age']).toBe(1000)
})

test('array test', () => {
    let users = [{
        name: 'Dimych',
        age: 32
    },
        {
            name: 'Dimych',
            age: 32
        }
    ]
    let admins = users
    admins.push({name: 'Bandit', age: 40})

    expect(users[2]).toEqual({name: 'Bandit', age: 40})
})

