// Public Access Modifier
class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person = new Person("Rifa")
console.log(person);
console.log(person.name = "Rifa Alfadli");
person.sayHello();
