// Interface
interface Person1 {
    name: string;
    age: number;
    greeting: string;
}

const john: Person1 = {
    name: 'John',
    age: 20,
    greeting: "Hello My name is John"
}

const rifa: Person1 = {
    name: 'Rifa',
    age: 19,
    greeting: "Hello My name is Rifa"
}

function personGreeting(person: Person1): void {
    console.log(person.greeting);
}

personGreeting(rifa);
personGreeting({
    name: 'John',
    age: 20,
    greeting: "Hello My name is John"
});