// Decorator
// sample 1
function validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
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
  @validate
  // add.identityNameAsString
  add(itemName: string, quantity: number): string {
    console.log(`Added item : ${itemName} with ${quantity} qty`);
    return `Added item : ${itemName} with ${quantity} qty`;
  }
}

// Contoh penggunaan:
const shoppingCart = new ShoppingCart();

try {
  shoppingCart.add("Laptop", 1);
} catch (error: any) {
  console.error(error.message);
}


// sample 2
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with args: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} returned: ${result}`);
    return result;
  };
}

class Calculator {
  @log
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
calculator.add(5,3);

