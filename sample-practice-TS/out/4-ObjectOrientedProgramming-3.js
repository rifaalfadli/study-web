// Public Access Modifier
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person = new Person("Rifa");
console.log(person);
console.log(person.name = "Rifa Alfadli");
person.sayHello();
//# sourceMappingURL=4-ObjectOrientedProgramming-3.js.map