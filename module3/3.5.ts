{
    //Acess Modifiers
    class BankAccount {
        // readonly accountNumber: string;
        // name: string;
        // private balance: number;

        constructor( public readonly accountNumber: string, public name: string, protected _balance: number) {
            // this.accountNumber = accountNumber;
            // this.name = name;
            // this.balance = balance;
        }

        addDeposit(amount: number): void {
            if (amount > 0) {
                this._balance += amount;
                console.log(`Deposit successful. New balance: ${this._balance}`);
            } else {
                console.log("Invalid deposit amount. Please enter a positive number.");
            }
        }

        withdraw(amount: number): void {
            if (amount > 0 && amount <= this._balance) {
                this._balance -= amount;
                console.log(`Withdrawal successful. New balance: ${this._balance}`);
            } else {
                console.log("Invalid withdrawal amount. Please enter a positive number that does not exceed the current balance.");
            }
        }

        getBalance(): number {
            return this._balance;
        }
    }

    const goribManushAccount = new BankAccount("123456789", "Gorib Manush", 1000);
    console.log(goribManushAccount); // Output: BankAccount { accountNumber: '123456789', name: 'Gorib Manush', balance: 1000 }
    goribManushAccount.addDeposit(500); // Output: Deposit successful. New balance: 1500
    goribManushAccount.withdraw(200); // Output: Withdrawal successful. New balance: 1300
    console.log(goribManushAccount.getBalance()); // Output: 1300   


    //Student Account
    class StudentAccount extends BankAccount {
        constructor(accountNumber: string, name: string, balance: number, public studentId: string) {
            super(accountNumber, name, balance);
        }
        
        displayStudentInfo(): void {
            console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Balance: ${this.getBalance()}`);
        }
    }

}