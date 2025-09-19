// Make a function to do a shopping payment checkout that has 2 parameters. amount, paymentProvider. use switch condition
function shoppingPayment(amount = 0, paymentProvider = "Cash") {
    switch(paymentProvider) {
        case "BSI": {
            console.log(`Transfer with BSI sebesar Rp${amount.toLocaleString("id-ID")}`);
            break;
        }
        case "BNI": {
            console.log(`Transfer with BNI sebesar Rp${amount.toLocaleString("id-ID")}`);
            break;
        }
        case "BCA": {
            console.log(`Transfer with BCA sebesar Rp${amount.toLocaleString("id-ID")}`);
            break;
        }
        case "BRI": {
            console.log(`Transfer with BRI sebesar Rp${amount.toLocaleString("id-ID")}`);
            break;
        }
        default: {
            console.log(`Transfer with Cash sebesar Rp${amount.toLocaleString("id-ID")}`);
            break;
        }
    }
}
shoppingPayment(10000);
shoppingPayment(55000, "BNI");