// learning Functions in TypeScript

// Normal function
// Arrow function

function add(a: number, b: number): number {
    return a + b;
}

const addNumbers = (a: number, b: number): number => {
    return a + b;
}

// Object --> functions -> methods

const poorUser : { name: string; balance: number; addBalance(balance: number): string } = {
    name: 'My Calculator',
    balance: 100,
    addBalance(balance: number): string {
        return `New balance is ${this.balance + balance}`;
    }
}

const newBalance: number[] = [100, 200, 300];

const totalNewBalance: number[] = newBalance.map((balance: number): number => balance * balance);