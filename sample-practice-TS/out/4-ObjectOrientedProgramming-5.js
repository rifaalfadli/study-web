// Protected Access Modifier (hanya bisa di akses sesama turunan class atau sub class)
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    honk() {
        console.log(`${this.brand} is honking`);
    }
}
class Cars extends Vehicle {
    start() {
        console.log(`${this.brand} is starting.`);
        this.honk(); // Accessing protected method
    }
}
const carToyota = new Cars("Toyota");
carToyota.start(); // Output Toyota is starting. Toyota is honking.
// carToyota.brand = "Honda" // Error: 'brand' is protected and cannot be accessed.
// carToyota.honk(); // Error: 'honk' is protected and cannot be accessed.
//# sourceMappingURL=4-ObjectOrientedProgramming-5.js.map