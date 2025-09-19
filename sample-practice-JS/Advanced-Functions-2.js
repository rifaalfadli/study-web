// Write a higher-order function compose that takes two functions and returns a new function that is the composition of the two functions. 
// The composition should apply the functions from right to left.
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

function compose(func1, func2) {
    return function (x) {
        return func1(func2(x));
    };
}

const composedFunction = compose(multiplyByThree, addTwo);
const result = composedFunction(5);
console.log(result);