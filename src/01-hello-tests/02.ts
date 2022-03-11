type StudentType = {
    id
}


const student: StudentType = {
    name: "Alex",
    age: 38,
    isActive: false,
    address: {
        streetTitle: "Wurganova 2",
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
