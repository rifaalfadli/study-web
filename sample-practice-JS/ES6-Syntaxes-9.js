// Default Parameters
// Create a function greet that logs a greeting with a default value
const greet = (name = 'Rifa') => {
    console.log(`Hello, ${name}!`);
};

// Create a function calculateArea that computes the area of a rectangle
const calculateArea = (length = 5, width = 3) => { return length * width };
console.log(calculateArea());
