// Private Access Modifier
class BankAccounts {
    constructor(initialBalance, tierLevel) {
        this.balance = initialBalance;
        this.tierLevel = tierLevel;
    }
    applyFee(fee) {
        this.balance -= fee;
    }
    decodeAPIKey() {
        // dapatkan API Key dari suatu tempat
        // kita assign API Key ke dalam class
        this.apikey = "suatu api key";
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        // withdraw dari bank lain atau atm lain
        // if dari bank lain
        // if api key itu valid maka 
        this.applyFee(2000);
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    get getBalance() {
        return this.balance;
    }
}
// penerapan polymorphism (satu class bisa jadi banyak bentuk)
const BankAccountBronze = new BankAccounts(1000, 0);
const BankAccountSilver = new BankAccounts(500000, 1);
const BankAccountGold = new BankAccounts(5000000, 2);
console.log(BankAccountBronze.getBalance);
//# sourceMappingURL=4-ObjectOrientedProgramming-4.js.map