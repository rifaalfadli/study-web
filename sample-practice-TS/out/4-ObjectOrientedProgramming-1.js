// Classes and Objects
class Car {
    // constructor
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // functions or methods
    startEngine() {
        console.log(`Starting the ${this.brand} ${this.model}`);
    }
}
// Creating the objects
const carCamry = new Car("Toyota", "Camry", 2022);
// Getting the attributes and method call
console.log(carCamry.brand);
console.log(carCamry.model);
console.log(carCamry.year);
console.log(carCamry);
carCamry.startEngine();
// sample practice
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some generic sound");
    }
}
// Creating an object
let cat = new Animal("Whiskers");
console.log(cat.name);
cat.makeSound();
//# sourceMappingURL=4-ObjectOrientedProgramming-1.js.map