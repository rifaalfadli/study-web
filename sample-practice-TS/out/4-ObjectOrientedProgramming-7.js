// Polymorphism (satu class bisa jadi banyak bentuk)
class Animalss {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some generic sound");
    }
}
class Birds extends Animalss {
    fly() {
        console.log(`${this.name} is flying`);
    }
}
function animalInfo(animal) {
    console.log(`Name: ${animal.name}`);
    animal.makeSound();
}
let dog = new Animalss("Buddy");
animalInfo(dog);
let parrot = new Birds("Polly");
animalInfo(parrot); // Works because Birds extends Animalss
//# sourceMappingURL=4-ObjectOrientedProgramming-7.js.map