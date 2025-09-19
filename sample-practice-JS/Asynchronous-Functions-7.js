// Modify the fetchData function from the previous example 
// to return a promise that resolves with the fetched data after a delay of 2 seconds.
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Data fetched successfully!");
            resolve("Fetched data")
        }, 2000);
    });
}

fetchData().then(function (data) {
    console.log("Data processed: " + data);
});