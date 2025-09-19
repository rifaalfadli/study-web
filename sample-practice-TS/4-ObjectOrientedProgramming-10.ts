// Abstraction (suatu konsep dimana kita bisa hiding unnecessary dan expos hal-hal yang penting saja)
// class yang abstrak itu tidak bisa di instantied, tiodak bisa dibikin "new ...", hanya bisa digunakan sebagai template.
// untuk membuat objek kita perlu template class, lalu untuk membuat class, kita butuh template namanya abstrak class.
// template untuk bikin class yang lebih spesifik
// peraturan dari abstrak adalah harus diimplementasi semua yang ada di abstrak class.
abstract class Shape {
    abstract calculateArea(): number;
}

// template untuk bikin object Circle
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// template untuk bikin object Rectangle
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// template untuk bikin object Triangle
class Triangle extends Shape {
    private alas: number;
    private tinggi: number;

    constructor(alas: number, tinggi: number) {
        super();
        this.alas = alas;
        this.tinggi = tinggi;
    }

    calculateArea(): number {
        return 0.5 * this.alas * this.tinggi;
    }
}

// object myCircle
const myCircle = new Circle(14);
console.log(myCircle.calculateArea());

// object myRectangle
const myRectangle = new Rectangle(30,22);
console.log(myRectangle.calculateArea());

// object myTriangle
const myTriangle = new Triangle(10, 20);
console.log(myTriangle.calculateArea());