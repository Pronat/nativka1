import {createGreetingMesssage, ManType} from "./05-01";

let people: Array<ManType> = [];

beforeEach( () =>
people = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
])

test("should return name with text", () => {
    const messages = createGreetingMesssage


expect(messages.length).toBe(3);
expect(messages[0]).toBe("Hello Andrew, how are you?");
expect(messages[1]).toBe("Hello Alexandr, how are you?");
expect(messages[2]).toBe("Hello Dmitry, how are you?");
})