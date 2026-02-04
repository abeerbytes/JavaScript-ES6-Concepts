const number =[2,3,4,5,6,]

const multiplyimp=number.map(num=>num *2)

// 

const multiplyexplicit=number.map(num=> {
    return num * 2
})

console.log("original array:",number)
console.log("multiply using implicit:",multiplyimp)
console.log("multiply using explicit:",multiplyexplicit)