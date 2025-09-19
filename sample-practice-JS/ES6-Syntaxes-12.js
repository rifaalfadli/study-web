// You're developing a simple e-commerce application and need to represent products in your system.
// Implement a JavaScript class representing a product. The class should have properties for the product's name, price, and quantity available in stock.
class Product {
    constructor(name, price, quantityStock) {
        this.name = name;
        this.price = price;
        this.quantityStock = quantityStock;
    }

    displayInfo() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity Stock: ${this.quantityStock}`);
    }
}

// Test Case
const laptopLenovo = new Product("Laptop Lenovo", 999, 1);
console.log(laptopLenovo);
laptopLenovo.displayInfo();

const laptopMac = new Product("Laptop Mac", 1000, 5);
console.log(laptopMac);
laptopMac.displayInfo();