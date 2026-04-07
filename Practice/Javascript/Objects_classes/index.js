// classes and Objects
class car {
    constructor(model){
        this.model = model;
    }
    show(){
        console.log(`this is best ${this.model}'s car`);
    }
};


let honda = new car("Honda");
let lamborgini = new car("Lamborgini");
honda.show();
lamborgini.show();

// banking example for class and object understanding
// simple BankAccount class

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}`);
        }
    }

    checkBalance() {
        console.log(`Balance: ${this.balance}`);
    }
}

const acc1 = new BankAccount("Gourav", 1000);

acc1.deposit(500);
acc1.withdraw(200);
acc1.checkBalance();