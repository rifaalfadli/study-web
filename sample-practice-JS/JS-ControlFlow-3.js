// Make a function to determine if a balance it is not enough to make a payment, 
// then send a message for each condition, "payment succeed", "balance is not sufficient", use if condition
// ver 1
var saldo = 100000;
var jumlahPayment = 30000;
function payment() {
    if (jumlahPayment < saldo) {
        console.log("payment succed");
    } else {
        console.log("balance is not sufficient");
    }
}
payment(); 

// ver 2
var saldo = 100000;
function payment(amount) {
    if (amount < saldo) {
        console.log("payment succed");
    } else {
        console.log("balance is not sufficient");
    }
}
payment(30000); 

// ver 3
var isSuccess = "payment succeed";
var isNotSuccess = "balance is not sufficient";
var amount = 5000;
var balance = 5000;
function payment(amount, balance) {
    return amount <= balance ? isSuccess : isNotSuccess
}
console.log(payment(amount, balance));
