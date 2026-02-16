console.log("---SETBHEVIOR---")
const mySet=new Set()

const variable=10
const string="10"
const boolean=true

const objValue={
    name:"abeer",
    age:26
}
const arryValue=[1,2,3]


function logSet(step){
    console.log(`n/${step}`)
    console.log("size:",mySet.size)
    console.log("contents:",mySet)
}

mySet.add(variable)
logSet("after adding number 10")

mySet.add(string)
logSet("after adding string value")

mySet.add(boolean)
logSet("after adding boolean value")


mySet.add(10)
mySet.add("10")
logSet("after atemping duplicate primatives")


mySet.add(objValue);
logSet("After adding object");

mySet.add(arryValue);
logSet("After adding array");

mySet.add({ name: "Abeer", age: 20 }); 
mySet.add([1, 2, 3]);
logSet("After attempting duplicate object & array");


objValue.age = 25;
logSet("After modifying stored object (age changed to 25)");

