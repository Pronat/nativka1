let props: ManType;

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimisti Street"
            }
        }
    }
})

type LessonType = {
    title: string
}

type ManType = {
    name: string,
    age: number,
    lessons: Array<LessonType>,
    address: {
        street: {
            title: string
        }
    }
}



test("", () => {
    // const age = props.age;
    // const lessons = props.lessons;
    var {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

    expect(title).toBe("Nezavisimisti Street")
})