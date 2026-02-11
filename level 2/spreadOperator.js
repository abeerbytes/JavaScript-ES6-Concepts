console.log("1️⃣ Direct reference vs spread copy");

// Original object
const originalUser = {
  name: "Abeer",
  age: 22,
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};
const referenceUser = originalUser;


referenceUser.address.city = "Lahore";


referenceUser.age = 23;

console.log("Original User after referenceUser modification:", originalUser);
console.log("Reference User:", referenceUser);


const spreadUser = { ...originalUser };

spreadUser.address.country = "India";


spreadUser.name = "Ali";

console.log("Original User after spreadUser modification:", originalUser);
console.log("Spread User:", spreadUser);
