// Encapsulation
class BankAccount1 {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    // kenapa kita buat variable balance private, jika ujung-ujungnya akan ditampilkan melalui function getBalance?
    // konsep nya adalah orang tidak boleh akses private balance seenaknya, tapi harus bisa akses lewat suatu fungsi tertentu.
    // jadi ketika kita dalam getBalance ada suatu validasi atau keamanan(security), misal: if userId ada di database, atau mungkin ada logika/validasi lainnya, kita bisa menjalankan itu.
    // karena kalo kita tidak ada fungsinya, kita langsung expose balance value ke orang, kalo seperti ini kita jadi tidak tahu siapa saja yang akses, ini jelas bahaya.
    // itu lah mengapa orang hanya bisa mengakses balance, lewat function getBalance, jadi kita bisa ada control untuk menaruh beberapa keamanan di fungsi getBalance.
    // jadi bisa diibaratkan kita punya banyak pintu, nah setiap pintunya itu sudah ada keamanannya. kita harus membuat seperti itu agar protokol dan code lebih terjaga.
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
}
class BankAccount2 {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }
    // Getter
    get balance() {
        return this._balance;
    }
    // Setter dengan validasi
    set balance(amount) {
        if (amount < 0) {
            throw new Error("Saldo tidak boleh negatif");
        }
        this._balance = amount;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Jumlah harus positif");
        this._balance += amount;
    }
}
const acc = new BankAccount2(1000);
console.log(acc.balance); // akses lewat getter: 1000
acc.deposit(500); // tambah saldo via method
console.log(acc.balance); // 1500
// acc._balance = 999999; // error: _balance private
//# sourceMappingURL=4-ObjectOrientedProgramming-2.js.map