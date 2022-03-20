test("Should take man older than 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter((age: number) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("Course price should be chipper than 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150},
        ]

     const chipCourses = courses.filter((course: CourseType) => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("React");
})


test("Get only completed tasks", ()=> {
    const tasks = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'Solt', isDone: false},
    {id: 4, title: 'Sugar', isDone: true},
    ]

    type TasksType = {
        id: number;
        title: string;
        isDone: boolean;
    }

    const tasksPredicate = (tasks: TasksType) => {
        return tasks.isDone === false
    }

    const completedTasks = tasks.filter(tasksPredicate);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
})