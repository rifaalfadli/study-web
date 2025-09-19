// Getter and Setter
class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // Getter for name
    get getName() {
        return this._name;
    }
    // Setter for name
    set setName(newName) {
        this._name = newName;
    }
}
const personMira = new Person2("Mira", 22);
console.log(personMira.getName);
personMira.setName = "Mira Lestari";
console.log(personMira.getName);
//# sourceMappingURL=4-ObjectOrientedProgramming-12.js.map