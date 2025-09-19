// Create a function factory that generates functions that adds 2 values.
// ver 1
const functionFactory = function (x) {
    return function (y) {
        return x + y;
    }
};

// ver 2
// const functionFactory = (x) => (y) => x + y;

const add5 = functionFactory(5);
console.log(add5(3));
