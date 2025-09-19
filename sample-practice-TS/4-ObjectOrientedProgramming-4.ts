// Private Access Modifier
class BankAccounts {
    private balance: number;
    private apikey: string;  // untuk api key harusnya buat terpisah, di calss bary.
    private tierLevel: number;

    constructor(initialBalance: number, tierLevel: number) {
        this.balance = initialBalance;
        this.tierLevel = tierLevel;
    }

    private applyFee(fee: number) {
        this.balance -= fee;
    }

    private decodeAPIKey() {
        // dapatkan API Key dari suatu tempat
        // kita assign API Key ke dalam class
        this.apikey = "suatu api key"
    }

    public deposit(amount: number) {
        this.balance += amount;
    }

    public withdraw(amount: number) { // pakai set
        // withdraw dari bank lain atau atm lain
        // if dari bank lain
        // if api key itu valid maka 
            this.applyFee(2000);
            if (amount <= this.balance) {
                this.balance -= amount;
            } else {
                console.log("Insufficient funds");
            }
    }

    get getBalance() { // pakai get
        return this.balance;
    }
}

// penerapan polymorphism (satu class bisa jadi banyak bentuk)
const BankAccountBronze = new BankAccounts(1000, 0);
const BankAccountSilver = new BankAccounts(500000, 1);
const BankAccountGold = new BankAccounts(5000000, 2);

console.log(BankAccountBronze.getBalance);

