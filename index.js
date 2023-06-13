let balance = 500.00;




// class Transaction {

//   constructor(amount, account) {
//     this.amount  = amount;
//     this.account = account;
//   }

// }


// class Deposit {

//   constructor(amount) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance += this.amount;
//   }

// }

// class Withdrawal {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance -= this.amount;
//   }



// }

// class Account {

//   constructor(username) {
//     this.username = username;
//     // Have the account balance start at $0 since that makes more sense.
//     this.balance = 0;
//   }

// }
// const myAccount = new Account("snow-patrol");







// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected

// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// // t3 = new Deposit(120.00);
// // t3.commit();
// // console.log('Transaction 3:', t3);

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();

// console.log('Balance:', balance);




class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
