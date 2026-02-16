console.log("Task 1.3  bind and Delayed Execution");

// Object with method using this
const student = {
  name: "Abeer",
  age: 21,
  
  introduce: function () {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
  }
};



console.log("Step 1: Without bind (context lost)");

setTimeout(student.introduce, 1000);



console.log("Step 2: Using bind (context fixed)");

const boundFunction = student.introduce.bind(student);

setTimeout(boundFunction, 2000);



console.log("Step 3: Direct bind inside setTimeout");

setTimeout(student.introduce.bind(student), 3000);
