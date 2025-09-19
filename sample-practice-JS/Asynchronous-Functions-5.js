// Promises are a cleaner way to handle asynchronous operations. 
// A promise represents a value which might be available now, or in the future, or never.
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const success = Math.random() < 0.5; // Simulatinmg success or failure
            if (success) {
                console.log("Data fetched successfully!");
                resolve();
            } else {
                console.log("Error fetching data!");
                reject();
            }
        }, 2000);
    });
}

fetchData()
    .then(function () {
        console.log("Data processed!");
    })
    .catch(function () {
        console.log("Retry or handle the error");
    });
