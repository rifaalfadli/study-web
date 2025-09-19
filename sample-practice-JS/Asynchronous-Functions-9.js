// Create an async function sumNumbers that takes two numbers and returns their sum after a delay of 1 second.
async function sumNumbers(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            const result = a + b;
            resolve(result);
        }, 1000);
    });
}

async function displaySum() {
    const result = await sumNumbers(4, 5);
    console.log("Sum is: " + result);

}

displaySum();
