console.log("Program Started")

console.log("-----Var-----")

try{
    console.log("var before declaration",a)

}
catch(error){
    console.log("var before declared",error.message)
}


var a =10
console.log("after declaration",a)











console.log("-----Let-----")

try{
    console.log("let before declaration",b)

}
catch(error){
    console.log("let error",error.message)

}

let b=20
console.log("after declaration",b)






console.log("-----const---")
try{
    console.log("const before declaration",c)

}
catch(error){
    console.log("const error",error.message)

}
const c=30
console.log("after declaration ",c)














console.log("---function----")
try{
    SayHello()

}
catch(error){
    console.log("error",error.message)
}

function SayHello(){
    console.log("function declaration excuted")
}





console.log("function expressiom")
try {
  sayHi();
} catch (error) {
  console.log( error.message);
}

var sayHi = function () {
  console.log(" Function expression executed");
};

sayHi();



