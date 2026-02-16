console.log("Task 3.2 – ES6 Classes");


class User {
  constructor(name, age) {

    this.name = name;
    this.age = age;
    this.id = Math.random();
  }

  greet() {
    console.log("Hi, I'm " + this.name);
  }

  getAge() {
    console.log(this.name + " is " + this.age + " years old.");
  }
}

// Create instances
const user1 = new User("Abeer", 21);
const user2 = new User("Ali", 23);


-
console.log("Unique IDs:");
console.log(user1.id);
console.log(user2.id);


-
console.log("Shared Methods:");
user1.greet();
user2.greet();



console.log("Same greet function?");
console.log(user1.greet === user2.greet);



console.log("Is greet on prototype?");
console.log(User.prototype.hasOwnProperty("greet"));
