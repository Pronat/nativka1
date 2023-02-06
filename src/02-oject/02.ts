import * as timers from "timers";

type StudentType ={
    id: number
    name: string,
    age: number,
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType
}
type AddressType = {
    streetTitle: string
    city: cityType
}
type cityType = {
    title: string
    countryTitle: string
}
type TechnologiesType = Array<TechnologiesPodType>
type TechnologiesPodType = {
    id: number
    title: string
}
export const student: StudentType = {
    id: 1,
    name: "Alex",
    age: 20,
    isActive: true,
    address: {
        streetTitle: "Kosmonavtov 38",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.address.streetTitle)
console.log(student.technologies[2].title)
console.log(student.technologies[1].id)