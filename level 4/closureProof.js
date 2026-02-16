console.log("Task 2.1  Closure Proof");

function createCounter() {
  let count = 0

  return function () {
    count++;
    console.log("Current Count:", count);
  }
}

x
const counter = createCounter();


counter(); 
counter(); 
counter(); 

