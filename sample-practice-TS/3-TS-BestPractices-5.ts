// Use Generics for Reusable Code
// Using a generic function
function identity<T>(value: T): T {
  return value;
}

// Contoh pemanggilan generic function
const numberResult = identity<number>(42);          // tipe T = number
const stringResult = identity<string>("Hello");     // tipe T = string
console.log(numberResult); // 42
console.log(stringResult); // Hello


// Using a generic class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }
}

// Contoh pemakaian generic class
const numberBox = new Box<number>(100);
console.log(numberBox.getValue()); // 100

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // TypeScript
