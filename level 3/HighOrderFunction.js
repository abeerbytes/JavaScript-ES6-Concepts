function runController(task,times){
    console.log("controller started...")

    for(let i = 1 ; i <= times; i++){
        console.log("Run number",i)
        task(i)
    }
    console.log("Controller finished")
}


// function greet(count){
//     console.log("helloo Abeer 👋", "Count:",count)



// }
// runController(greet,3)


// function square(count){
//     console.log("sqaure is:",count*count)
// }
// runController(square,4)



function stopeAtThree(count){
    if(count==3){
console.log("stopped at 3")
    }
    else{
        console.log("Running...")
    }


}
runController(stopeAtThree,5)




