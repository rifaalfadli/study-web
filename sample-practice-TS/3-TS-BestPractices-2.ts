// Use Interfaces or Types for Data Structures
// Using an interface for a user object
interface Users {
    id: number;
    username: string;
    email: string;
}

// Function accepting a User object
function printUser(user: Users): void {
    console.log(`User: ${user.username} (${user.email})`);
}

const userRifa: Users = {
    id: 123456,
    username: "Rifa",
    email: "rifa@gmail.com"
}

printUser(userRifa);