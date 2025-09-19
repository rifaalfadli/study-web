// Inheritance
class Animals {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}

class Bird extends Animals {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

let sparrow = new Bird("Tweetie");
sparrow.makeSound();    // Inherited from Animals class
sparrow.fly();          // Defined in Bird class
