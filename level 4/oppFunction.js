console.log("Task 3.1 – Constructor Functions");

// Constructor Function
function User(name, age) {
  
  this.name = name;
  this.age = age;
}

// ✅ Shared method (prototype)
User.prototype.greet = function () {
  console.log("Hi, I'm " + this.name);
};

User.prototype.getAge = function () {
  console.log(this.name + " is " + this.age + " years old.");
};


const user1 = new User("Abeer", 21);
const user2 = new User("Ali", 23);



console.log("Unique Properties:");
console.log(user1.id);
console.log(user2.id);



console.log("Shared Methods:");
user1.greet();
user2.greet();



console.log("Same greet function?");
console.log(user1.greet === user2.greet);
