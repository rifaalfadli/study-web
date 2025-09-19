// Class
// Create a class Shape with a method calculateArea
class Shape {
    calculateArea() {
        return 0;
    }
}

// Create a class Rectangle that extends Shape with its own calculationArea
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

