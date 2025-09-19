// Implement a counter function that maintains its state using a closure.
const counter = function () {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
};

const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
