{
    //Getter and Setter in TypeScript 
    class BankAccount {
        constructor( public readonly accountNumber: string, public name: string, protected _balance: number) {
        }

        //getter and setter
        get Balance(): number {
            return this._balance;
        }

        set Deposite(amount: number) {
            if (amount >= 0) {
                this._balance = this._balance + amount;
            } else {
                console.log("Invalid balance amount. Please enter a non-negative number.");
            }
        }

        set Withdraw(amount: number) {
            if (amount >= 0 && amount <= this._balance) {
                this._balance = this._balance - amount;
            } else {
                console.log("Invalid withdrawal amount. Please enter a non-negative number that does not exceed the current balance.");
            }
        }


        // addDeposit(amount: number): void {
        //     if (amount > 0) {
        //         this._balance += amount;
        //         console.log(`Deposit successful. New balance: ${this._balance}`);
        //     } else {
        //         console.log("Invalid deposit amount. Please enter a positive number.");
        //     }
        // }

        withdraw(amount: number): void {
            if (amount > 0 && amount <= this._balance) {
                this._balance -= amount;
                console.log(`Withdrawal successful. New balance: ${this._balance}`);
            } else {
                console.log("Invalid withdrawal amount. Please enter a positive number that does not exceed the current balance.");
            }
        }

        // getBalance(): number {
        //     return this._balance;
        // }
    }

    const goribManushAccount = new BankAccount("123456789", "Gorib Manush", 1000);

    // console.log(goribManushAccount); // Output: BankAccount { accountNumber: '123456789', name: 'Gorib Manush', balance: 1000 }
    // goribManushAccount.addDeposit(500); // Output: Deposit successful. New balance: 1500
    // goribManushAccount.withdraw(200); // Output: Withdrawal successful. New balance: 1300
    // console.log(goribManushAccount.getBalance()); // Output: 1300

    // Accessing balance using getter property
    goribManushAccount.Deposite = 500; // Using setter to deposit amount
    console.log(goribManushAccount.Balance); // Output: 1300
    goribManushAccount.Withdraw = 200; // Using setter to withdraw amount
    goribManushAccount.Deposite = 500; // Using setter to deposit amount
    console.log(goribManushAccount.Balance); // Output: 1800
}