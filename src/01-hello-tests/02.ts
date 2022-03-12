type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies:Array<TechType>  //т.к. это массив
}


const student: StudentType = {
    id: 1,
    name: "Alex",
    age: 38,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
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

console.log(student.age)
console.log(student.name)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)
