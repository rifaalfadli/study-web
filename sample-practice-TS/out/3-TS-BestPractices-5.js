// Use Generics for Reusable Code
// Using a generic function
function identity(value) {
    return value;
}
// Contoh pemanggilan generic function
const numberResult = identity(42); // tipe T = number
const stringResult = identity("Hello"); // tipe T = string
console.log(numberResult); // 42
console.log(stringResult); // Hello
// Using a generic class
class Box {
    constructor(value) {
        this.content = value;
    }
    getValue() {
        return this.content;
    }
}
// Contoh pemakaian generic class
const numberBox = new Box(100);
console.log(numberBox.getValue()); // 100
const stringBox = new Box("TypeScript");
console.log(stringBox.getValue()); // TypeScript
//# sourceMappingURL=3-TS-BestPractices-5.js.map