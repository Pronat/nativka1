export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function moveUser(u: UserWithLaptopType, city: string) {

    const copy = {
        ...u,

    }
    copy.address = {...copy.address, city: city}
    return copy
}