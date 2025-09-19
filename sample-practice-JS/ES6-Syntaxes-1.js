// use of let and const
let num = 10;

if (true) {
    let num = 20;
    console.log(num); // Output? 20 (inner scope)
}

console.log(num); // Output? 10 (outer scope)

const PI = 3.14;
PI = 4; // Error: Assignment to constant variable.