// ====== Partial <T> ======
// Partial adalah tools agar kita dapat memanipulasi suatu tipe data atau existing atau yang sudah ada, menjadi tipe data yang baru.
interface User {
    id: string,
    name: string,
    age: number
}

type PartialUser = Partial<User>;
const partialUser: PartialUser = {
    name: 'Rifa'
};
console.log(partialUser);


// ====== Pick <T, K> ======
// Pick adalah dimana kita bisa mengambil suatu tipe data dari tipe data existing.
interface Car {
    make: string;
    model: string;
    year: number;
}

type CarInfo = Pick<Car, 'make' | 'model'>;
const carInfo: CarInfo = {
    make:'Toyota', model: 'Camry'
};
console.log(carInfo);


// ====== Omit <T, K> ======
// Omit adalah dia ibaratnya me-remove suatu tipe data pada data existing lalu kita masukkan dia ke dalam variabel atau tipe data yang baru.\
// sample 1
interface Product {
    id: number;
    name: string;
    price: number;
}
type DiscountedProduct = Omit<Product, 'price' | 'name'>;
const discountedProduct: DiscountedProduct = {id: 1};
console.log(discountedProduct);

// sample 2
interface Employees {
    idEmployee: string;
    name: string;
    age: number;
}
type Personn = Omit<Employees, "idEmployee">;
const personRifa: Personn = {
    name: "Rifa",
    age: 19
}
console.log(personRifa);


// ====== Readonly <T> ======
// Readonly adalah tujuannya untuk dapat membuat suatu tipe data fields itu menjadi readonly (artinya dia tidak bisa dimodifikasi atau tidak bisa di redeclare)
interface Point {
    x: number;
    y: number;
}

type ImmutablePoint = Readonly<Point>;
const point: ImmutablePoint = {x: 10, y: 20};
console.log(point);


// ====== Exclude <T, U> ======
// Exclude adalah tipe utilitas yang mengecualikan dari T tipe-tipe yang dapat ditetapkan ke U. Ini berguna ketika Anda ingin membuat tipe yang mengecualikan nilai-nilai tertentu.
type NumberOrString = number | string;
type NumbersOnly = Exclude<NumberOrString, string>;
const numberValue: NumbersOnly = 42;
console.log(numberValue);


// ====== sample practice ======
// interface Transactionss
interface Transactionss {       
    timestamp: string;  // type data transaction: timestamp, amount, accountNumber
    amount: number;             
    accountNumber: number;
}
// bikin transaksi
const transactionss: Transactionss = {
    timestamp: "05-06-2025",
    amount: 500000,
    accountNumber: 123456
}

// type TranseferFee = modify dari interface Transactionss
type TransferFee = Omit<Transactionss, "accountNumber">;  // transaction timestamp, amount (fee transfer)  
// bikin transaksi
const transferFee: TransferFee = {
    timestamp: "15-08-2025",
    amount: 6500
}

// function for viewTransactionHistory
function viewTransactionHistory(transaction: TransferFee | Transactionss): void {
    console.log(transaction);
}

// panggil fungsi untuk transactionss
viewTransactionHistory(transactionss);
// panggil fungsi untuk transfer fee
viewTransactionHistory(transferFee);