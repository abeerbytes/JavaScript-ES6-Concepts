function CalculateNumber(...number){
    let total=0
    for(let num of number){
        total +=num
    }
    return total


}
console.log(CalculateNumber(2,3,4,5,6,))
console.log(CalculateNumber(100,200,300,400))