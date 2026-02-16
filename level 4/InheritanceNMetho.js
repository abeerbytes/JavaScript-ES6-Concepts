console.log("Task 3.3 – Inheritance & Method Overriding");


class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
  }

  role() {
    console.log("I am a normal user.");
  }
}



class Admin extends User {
  constructor(name, age, permissions) {

    super(name, age);

    this.permissions = permissions;
  }


  role() {
    console.log("I am an admin with permissions:", this.permissions);

   
    super.role();
  }
}


const user1 = new User("Abeer", 21);
const admin1 = new Admin("Ali", 25, ["delete", "edit", "ban"]);



console.log("Base Class Output:");
user1.introduce();
user1.role();



console.log("Child Class Output:");
admin1.introduce(); 
admin1.role();      



console.log("Is admin instance of User?");
console.log(admin1 instanceof User);
