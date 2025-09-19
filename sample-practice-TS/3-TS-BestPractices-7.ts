// Use Async/Await for Asynchronous Operations
// Fungsi asynchronous yang mengembalikan Promise<string>
async function fetchData(): Promise<string> {
  // Tunggu hasil HTTP request dari API
  const response = await fetch('https://api.example.com/data');

  // Tunggu konversi body response menjadi string
  const data = await response.text();

  // Kembalikan string ke pemanggil, dibungkus Promise
  return data;
}
