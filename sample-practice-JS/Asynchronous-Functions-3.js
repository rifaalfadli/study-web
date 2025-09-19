// Create a function calculate that takes two numbers and a callback function. 
// The callback should be called with the result of adding the two numbers after a delay of 1 second.
function calculate(a, b, callback) {
    setTimeout(function () {
        const result = a + b;
        callback(result);
    }, 1000);
}

function displayResult(result) {
    console.log("Result is: " + result);
}

calculate(5, 7, displayResult);