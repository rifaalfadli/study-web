class Documents {
    print() {
        console.log("Printing document...");
    }
}
class Photos {
    print() {
        console.log("Printing photo...");
    }
}
const myDocuments = new Documents;
myDocuments.print();
const myPhotos = new Photos;
myPhotos.print();
class Circles {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
//# sourceMappingURL=4-ObjectOrientedProgramming-11.js.map