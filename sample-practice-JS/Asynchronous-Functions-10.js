// Modify the fetchData function from a previous example to use async/await and 
// return the fetched data. Create a separate function to handle errors.
// Fungsi async yang akan mengembalikan Promise
async function fetchData() {
    // Membuat Promise baru secara manual
    return new Promise(function (resolve, reject) {
        // Simulasi proses asynchronous (misalnya ambil data dari server)
        setTimeout(function () {
            // Math.random() menghasilkan angka 0-1
            // Kalau < 0.5 berarti dianggap sukses, kalau >= 0.5 dianggap gagal
            const success = Math.random() < 0.5;

            if (success) {
                console.log("Data fetched successfully!"); // Log ke console
                resolve("Fetched data"); // Janji terpenuhi → kirim data ke .then / await
            } else {
                console.log("Error fetching data!"); // Log error
                reject("Failed to fetch data"); // Janji gagal → kirim error ke .catch / try-catch
            }
        }, 2000); // delay 2 detik untuk simulasi waktu tunggu
    });
}

// Fungsi async yang memanggil fetchData dan menangani error
async function fetchDataAndHandleError() {
    try {
        // Menunggu hasil dari fetchData
        const data = await fetchData();
        console.log("Data processed: " + data); // Jika sukses → tampilkan datanya
    } catch (error) {
        // Jika Promise dari fetchData gagal (reject)
        console.log("Error: " + error);
    }
}

// Panggil fungsi utama untuk menjalankan simulasi
fetchDataAndHandleError();

