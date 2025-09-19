async function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Data fetched successfully");
            resolve("Fetched data");
        }, 2000);
    });
}

async function processData() {
    const data = await fetchData();
    console.log("Data processed: " + data);
}

processData();