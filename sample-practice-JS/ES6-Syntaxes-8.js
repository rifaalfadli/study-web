// Object Enhancements
const name = "Rifa";
const age = 19;

// Create an object with name and age properties using shorthand syntax
const person = { name, age }
console.log(person.name);  // Output: Rifa
console.log(person.age);   // Output: 19

// Create an object with a method 'greet' that logs a greeting
const greeter = {
    greet() {
        console.log('Hello!');
    }
};
// Biasanya kalau bikin method di object, kita tulis:
// const greeter = {
//     greet: function() {
//         console.log('Hello!');
//     }
// };
greeter.greet();           // Output: Hello!