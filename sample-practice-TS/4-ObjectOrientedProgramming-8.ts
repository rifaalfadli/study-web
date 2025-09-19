// Method Overriding (suatu konsep, dimana kita bisa me-replace atau menumpuk, membuat fungsi yang baru atas fungsi yang sudah ada sebelumnya)
class Animalsss {
    public makeSound(): void {
        console.log("Animal is making a sound.");
    }
}

class Dog extends Animalsss {
    public makeSound(): void {
        console.log("Dog is barking.");
    }
}

class Cat extends Animalsss {
    public makeSound(): void {
        console.log("Cat is meowing.");
    }
}

const animal: Animalsss = new Animalsss();
const dogs: Dog = new Dog();
const cats: Cat = new Cat();

animal.makeSound();
dogs.makeSound();
cats.makeSound();