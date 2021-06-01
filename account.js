class Account {
  constructor(name, balance) {
    this._id = Account.counter;
    this._name = name;
    this._balance = balance;
    Account.counter++;
  }

  static counter = 0;

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw Error("Invalid name");
    }
    this._name = value;
  }

  set balance(value) {
    if (typeof value === "number" && !Number.isNaN(value) && value >= 0) {
      this._balance = value;
    } else {
      throw Error("Invalid Balance");
    }
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      throw Error("Amount exceeded balance.");
    }
  }

  transferTo(anotherAccount, amount) {
    this.debit(amount);
    anotherAccount.credit(amount);
    return this.balance;
  }

  toString() {
    return `${this.name} balance is ${this.balance}`;
  }
}

let acc1 = new Account("Account 1", 15000);
console.log(acc1.toString());
console.log(acc1);
acc1.credit(5000);
console.log(acc1);
//acc1.debit(19900);
//console.log(acc1);
//acc1.debit(200);

let acc2 = new Account("Account 2", 0);

console.log("Account 1 balance :" + acc1.balance);

acc1.transferTo(acc2, 5000);

console.log("Account 1 balance :" + acc1.balance);
console.log("Account 2 balance :" + acc2.balance);
console.log(Account.identifyAccounts(acc1, acc2));

let acc1clone = acc1;

console.log(Account.identifyAccounts(acc1, acc1clone));
