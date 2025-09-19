// Method Overloading
// ver 1
// class Calculators {
//     public add(a: number, b: number): number;
//     public add(a: string, b: string): string;
//     public add(a: any, b: any): any {
//         return a + b;
//     }
// }
// ver 2
class Tools {
    add(a, b) {
        return a + b;
    }
}
class Calculators {
    add(a, b) {
        return a + b;
    }
}
const calculators = new Calculators();
// const result1 = calculators.add(1,2);
// console.log(result1);
const result2 = calculators.add("Hello", " World");
console.log(result2);
// Implementasi tunggal
function greet(name, age) {
    return age
        ? `Hello ${name}, you are ${age} years old`
        : `Hello ${name}`;
}
console.log(greet("Rifa")); // ✅ sesuai signature 1
console.log(greet("Rifa", 20)); // ✅ sesuai signature 2
// greet(20); // ❌ error saat compile (tidak cocok signature)
//# sourceMappingURL=4-ObjectOrientedProgramming-9.js.map