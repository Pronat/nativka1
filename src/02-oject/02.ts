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
    }
}

console.log(student.address.streetTitle)