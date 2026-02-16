function step1(next){
    console.log("step 1 started...")

    console.log("work keep going")

    console.log ("step 1 completed")
    next()
}

function step2(next){
    console.log("step 2...")
    console.log('work keep going')
    console.log("step 2 completed")
    next()
}
function step3(){
    console.log("step 3 started...")
    console.log("work keep doing")
    console.log("step 3 completed")

}

console.log("Program statred")
step1(()=>step2(()=>step3()))

console.log("Program finished")

