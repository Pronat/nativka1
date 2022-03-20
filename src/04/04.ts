const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return (
        age > 90
    )
}

const oldAges = [100]; // > 90

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 300},
]

type CourseType = {
    title: string;
    price: number;
}

const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

