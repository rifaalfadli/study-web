// use native javascript method
// create a promise function to get users data
// users data link: https://jsonplaceholder.typicode.com/users

// function fetchUserData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// function delay(miliseconds) {
//     console.log('Mencoba Request Data User Ke Server');
//     setTimeout(() => {
//         console.log('Request Berhasil, Data User Tersimpan');
//     }, miliseconds);
// }

// delay(2000);

// fetchUserData();

// ver 1
async function fetchUserData() {
    const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(error => console.log(error));
    return fetchedData;
}

// ver 2
// async function fetchUserData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log("Error fetching data:", error);
//     }
// }

async function start1() {
    const data = await fetchUserData();
    console.log(data);
}

async function start2() {
    const data = await fetchUserData();
    data.forEach(user => {
        console.log(user.username);
    });
}

async function start3() {
    const data = await fetchUserData();
    console.log(data[0].username); // Ambil username dari user pertama
}

start1();
start2();
start3();

// async function sumNumbers(a, b) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof a !== "number" || typeof b !== "number") {
//                 // kalau input bukan angka, koki gagal
//                 reject("Koki nggak bisa masak, karena bukan angka!");
//             } else {
//                 const result = a + b;
//                 resolve(result); // koki berhasil, kasih hasil
//             }
//         }, 1000);
//     });
// }

// async function displaySum() {
//     try {
//         const result = await sumNumbers(3, "empat"); // sengaja salah
//         console.log("Sum is: " + result);
//     } catch (error) {
//         console.error("Terjadi error: " + error);
//     }
// }

// displaySum();

// async function sayHello() {
//     return "Hello";
// }

// sayHello().then(result => console.log(result));
// // Output: Hello
