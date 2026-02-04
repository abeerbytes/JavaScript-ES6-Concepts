console.log("START")

// var  re-declare

var a = 20
var a = 10
console.log("var re-declareda", a)


// let re-declare

let b = 40
// let b=40  error
b = 30
console.log("let re-declred", b)

// const object change 

const box={count:10}
// box=20  error
box.count=20
console.log("const object change", box.count)


