// Buat kode yang dapat menghasilkan nomor tanda terima transaksi yang 
// semuanya huruf kapital dengan format ini
// INV/<Metode Pembayaran>/<Nomor Pembayaran>/<Tanggal>
// Silakan Gunakan Utilitas String seperti concat dan toUpperCase

function generateReceipt(paymentMethod, paymentNumber, date) {
    var invoice = 'inv';
    var receiptNumber = invoice.concat("/", paymentMethod, "/", paymentNumber, "/", date);
    return receiptNumber.toUpperCase();
}

console.log(generateReceipt("BNI", "2023937", "2025-09-04"));