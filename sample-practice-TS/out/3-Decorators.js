var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator
// sample 1
function validate(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        switch (key) {
            case "add": {
                const quantity = args[1]; // argumen kedua = quantity
                if (quantity <= 0) {
                    throw new Error("Quantity is not valid");
                }
                break;
            }
            default:
            // tidak ada validasi khusus untuk method lain
        }
        // Jalankan method aslinya
        const result = originalMethod.apply(this, args);
        console.log(`Result ${result}`);
        return result;
    };
}
class ShoppingCart {
    // add.identityNameAsString
    add(itemName, quantity) {
        console.log(`Added item : ${itemName} with ${quantity} qty`);
        return `Added item : ${itemName} with ${quantity} qty`;
    }
}
__decorate([
    validate
    // add.identityNameAsString
], ShoppingCart.prototype, "add", null);
// Contoh penggunaan:
const shoppingCart = new ShoppingCart();
try {
    shoppingCart.add("Laptop", 1);
}
catch (error) {
    console.error(error.message);
}
// sample 2
function log(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${key} with args: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} returned: ${result}`);
        return result;
    };
}
class Calculator {
    add(x, y) {
        return x + y;
    }
}
__decorate([
    log
], Calculator.prototype, "add", null);
const calculator = new Calculator();
calculator.add(5, 3);
//# sourceMappingURL=3-Decorators.js.map