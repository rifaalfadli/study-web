// Follow Code Formatting and Style Guides
// Inconsistent formatting
function poorlyFormattedFunction  (value:number):number{
    return value + 1;
}

// Consistent formatting
function wellFormattedFunction(value: number): number {
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
    constructor(
        private make: string,
        private model: string
    ) {}

    getDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

const myCar = new CarModel('Toyota', 'Camry');
console.log(myCar.getDetails());
