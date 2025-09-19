// Follow Code Formatting and Style Guides
// Inconsistent formatting
function poorlyFormattedFunction(value) {
    return value + 1;
}
// Consistent formatting
function wellFormattedFunction(value) {
    return value + 1;
}
// Refactor: gunakan TypeScript Class untuk Encapsulation
// Masalah awal:
// Hanya pakai plain object:
const carModel = {
    make: 'Toyota',
    model: 'Camry',
};
console.log(`Make: ${carModel.make}, Model: ${carModel.model}`);
// Solusi (refactor ke Class):
class CarModel {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}
const myCar = new CarModel('Toyota', 'Camry');
console.log(myCar.getDetails());
//# sourceMappingURL=3-TS-BestPractices-9.js.map