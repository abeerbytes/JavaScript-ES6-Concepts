
const user = {
  name: "Abeer",
  age: 22

};

const {
  name,
  age,
  city = "Not Provided",
  role = "Guest"
} = user;

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Role:", role);
