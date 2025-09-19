// Polymorphism (satu class bisa jadi banyak bentuk)
class Animalss {
    name: string;

    constructor(name: string) {
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

function animalInfo(animal: Animalss) {
    console.log(`Name: ${animal.name}`);
    animal.makeSound();
}

let dog = new Animalss("Buddy");
animalInfo(dog);

let parrot = new Birds("Polly");
animalInfo(parrot); // Works because Birds extends Animalss


