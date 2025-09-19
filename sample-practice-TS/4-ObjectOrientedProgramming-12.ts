// Getter and Setter
class Person2 {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get getName(): string {
        return this._name;
    }

    // Setter for name
    set setName(newName: string) {
        this._name = newName;
    }
}

const personMira = new Person2("Mira", 22);
console.log(personMira.getName);
personMira.setName = "Mira Lestari";
console.log(personMira.getName);