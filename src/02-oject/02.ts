export const student = {
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