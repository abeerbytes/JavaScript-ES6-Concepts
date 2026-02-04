console.log("Run 1")

console.log("before" , typeof echoside)

{
    var echoside=10
    console.log("inside block with var",echoside)
}


{
    let echoside=20
    console.log("inside block with let",echoside)
}
console.log("after", typeof echoside)

console.log("......")


console.log("run 2")

ecoseed=99

{
    var ecoseed=30
    console.log("inside block with var",ecoseed)
}
{
    let ecoseed=40
    console.log("inside block with let",ecoseed)
}
console.log("after", ecoseed)