// Make a transfer function that have 2 parameters. Amount, transfer Method 
// where it is a transfer function that has its own logic to make transfer
function transferWithBNI(amount) {
    console.log(`Transfer with BNI sebesar Rp${amount.toLocaleString("id-ID")}`);
}

function transferWithBSI(amount) {
    console.log(`Transfer with BSI sebesar Rp${amount.toLocaleString("id-ID")}`);
}

function transferWithBCA(amount) {
    console.log(`Transfer with BCA sebesar Rp${amount.toLocaleString("id-ID")}`);
}

function transfer(amount = 0, transferMethod = transferWithBNI) {
    return transferMethod(amount);
}   

transfer(20000);
transfer(100000, transferWithBSI);