// Interfaces in TypeScript
type User1 = {
    name: string;
    age: number;
    email: string;
}

type UserWithAddress1 = User1 & {
    address: string;
}

interface User2 {
    name: string;
    age: number;
    email: string;
}

interface UserWithAddress2 extends User2 {
    address: string;
}

const user1: UserWithAddress2 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    address: "123 Main St"
};