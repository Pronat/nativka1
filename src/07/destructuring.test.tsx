test("", () => {
    let props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}]
    }

    const a = props.age;
    const l = props.lessons;

    expect(a).toBe(32);
    expect(l.length).toBe(2);
})