console.log("Task 1.1  Losing and Fixing this");

const user = {
  name: "Abeer",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};


user.greet();  


console.log("Step 2: Assigned to Variable");
const greetFunction = user.greet;
greetFunction();  


console.log("Step 3: Fixed using call()");
greetFunction.call(user);
