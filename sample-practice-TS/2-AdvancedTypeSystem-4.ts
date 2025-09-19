// Intersection and type
interface Persons {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    role: string;
    salary?: number; // opsional
}

type EmployedPerson = Persons & Employee; // type data gabungan
const employedRifa: EmployedPerson = {
    name: "Rifa",
    age: 19,
    employeeId: "123",
    role: "Software Engineer"
}

console.log(employedRifa);