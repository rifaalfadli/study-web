// Interfaces (untuk dapat mengimplementasi suatu kemampuan)
interface Printable { // (suatu fungsi atau kemampuan)
    print(): void;
}

class Documents implements Printable {
    print(): void {
        console.log("Printing document...");
    }
}

class Photos implements Printable {
    print(): void {
        console.log("Printing photo...");
    }
}

const myDocuments = new Documents;
myDocuments.print();

const myPhotos = new Photos;
myPhotos.print();


interface Shapes {
    calculateArea(): number;
}

class Circles implements Shapes {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
