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
    public add(a: number, b: number): number {
        return a + b;
    }
}

class Calculators {
    public add(a: string, b: string): string {
        return a + b;
    }
}

const calculators = new Calculators();
// const result1 = calculators.add(1,2);
// console.log(result1);

const result2 = calculators.add("Hello"," World");
console.log(result2);



// Deklarasi beberapa signature
function greet(name: string): string;
function greet(name: string, age: number): string;

// Implementasi tunggal
function greet(name: string, age?: number): string {
return age
    ? `Hello ${name}, you are ${age} years old`
    : `Hello ${name}`;
}

console.log(greet("Rifa"));       // ✅ sesuai signature 1
console.log(greet("Rifa", 20));   // ✅ sesuai signature 2
// greet(20); // ❌ error saat compile (tidak cocok signature)

