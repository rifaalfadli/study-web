// Method Overriding (suatu konsep, dimana kita bisa me-replace atau menumpuk, membuat fungsi yang baru atas fungsi yang sudah ada sebelumnya)
class Animalsss {
    makeSound() {
        console.log("Animal is making a sound.");
    }
}
class Dog extends Animalsss {
    makeSound() {
        console.log("Dog is barking.");
    }
}
class Cat extends Animalsss {
    makeSound() {
        console.log("Cat is meowing.");
    }
}
const animal = new Animalsss();
const dogs = new Dog();
const cats = new Cat();
animal.makeSound();
dogs.makeSound();
cats.makeSound();
//# sourceMappingURL=4-ObjectOrientedProgramming-8.js.map