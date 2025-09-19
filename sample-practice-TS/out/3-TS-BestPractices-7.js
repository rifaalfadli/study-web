var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Use Async/Await for Asynchronous Operations
// Fungsi asynchronous yang mengembalikan Promise<string>
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Tunggu hasil HTTP request dari API
        const response = yield fetch('https://api.example.com/data');
        // Tunggu konversi body response menjadi string
        const data = yield response.text();
        // Kembalikan string ke pemanggil, dibungkus Promise
        return data;
    });
}
//# sourceMappingURL=3-TS-BestPractices-7.js.map