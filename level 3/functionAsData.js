const greet= function(name){
    return  `heelo,${name}!`
}
console.log("store in values")
console.log(greet("Abeer"))



function ProcessUser(name,action){

console.log("Processing user...")
console.log(action(name))

}
function welcome(user){
    return `Welcome ${user} to the system`

}

console.log("/n passed as argument ")
ProcessUser("Ali",welcome)






function createMultiplier(multiplier){
    return function(number){
        return number * multiplier
    }
    
}

const double=createMultiplier(2)
const triple=createMultiplier(3)


console.log("/n returned from function")
console.log("double 5 =",double(5))
console.log("triple 5 =",triple(5))