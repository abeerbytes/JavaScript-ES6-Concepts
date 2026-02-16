console.log("Task 2.2  Independent Closures");

// Function Factory
function createBankAccount(owner) {
  let balance = 0;



  return function (amount) {
    balance += amount;
    console.log(owner + "'s Balance:", balance);
  }
}


const abeerAccount = createBankAccount("Abeer");
const aliAccount = createBankAccount("Ali");


abeerAccount(100);
abeerAccount(50);

aliAccount(200);
aliAccount(-50);

abeerAccount(25);
