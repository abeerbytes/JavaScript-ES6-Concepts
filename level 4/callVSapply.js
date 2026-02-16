console.log("Task 1.2 call vs apply");


function introduce(city, profession) {
  console.log(
    "Name:", this.name,
    "| Age:", this.age,
    "| City:", city,
    "| Profession:", profession
  );
}

const person = {
  name: "Abeer",
  age: 21
};


console.log("Using call() with 2 arguments");
introduce.call(person, "Karachi", "Web Developer");



console.log("Using apply() with 2 arguments");
introduce.apply(person, ["Lahore", "Frontend Developer"]);



console.log("Changing argument count (3 arguments)");

introduce.call(person, "Islamabad", "Full Stack Dev", "Extra Value");

introduce.apply(person, ["Multan"]);
