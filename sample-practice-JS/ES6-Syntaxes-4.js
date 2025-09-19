// Spread and Rest Operators
// Spread Operator
let arr = [6, 7, 8];
let newArr = [...arr, 9, 10]; // [6, 7, 8, 9, 10]
console.log(newArr);


// Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(6, 7, 8, 9, 10));
