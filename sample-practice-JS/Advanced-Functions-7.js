// Write an IIFE that takes a number as a parameter and immediately calculates and returns its square.
const square = (function (num) {
    return num ** 2;
})(5);

console.log(square);