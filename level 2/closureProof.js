function outerFunction(){
    let count=0
    console.log("Outer function executed. count =",count)
return function innerFuction(){
    count++
    console.log("inner function executed",count)
}
}
const counter=outerFunction()

counter()
counter()
counter()