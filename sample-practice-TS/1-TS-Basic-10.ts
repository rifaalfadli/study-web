// Async Programing with TypeScript
interface User1 {
  name: string;
  age: number;
}

function simulateFetchFromAPI<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

async function fetchUserData(): Promise<User1> {
  const data = await simulateFetchFromAPI<User1>({ name: "John", age: 30 });
  return data;
}

fetchUserData().then((user) => console.log(user));
