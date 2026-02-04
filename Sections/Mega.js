console.log("create mixed variale declration")

const variable=[
    {type:"var",name:"username",value:"Abeer"},
    {type:"let",name:"age",value:21},
    {type:"const ",name:"country",value:"Pakistan"},
    {type:"var",name:"isStudent",value:true},
    {type:"let",name:"akills",value:["HTML","CSS","JAVASCRIPT"]},


]
console.log(variable)

console.log("custom iterator")

function createIterator(list){
    let index=0
    return{
        next(){
            if(index < list.length){
                return {value:list[index++],done:false}
            }
            else{
                return{done:true}
            }
        }
    }


}
const analyzeVariable = (item) => {

    let scope;
    let reassign;
    let redeclare;

    if (item.type === "var") {
        scope = "Function Scoped";
        reassign = "Allowed";
        redeclare = "Allowed";
    }
    else if (item.type === "let") {
        scope = "Block Scoped";
        reassign = "Allowed";
        redeclare = "Not Allowed";
    }
    else {
        scope = "Block Scoped";
        reassign = "Not Allowed";
        redeclare = "Not Allowed";
    }

    return {
Variable Name : ${item.name}
Declaration   : ${item.type}
Value         : ${JSON.stringify(item.value)}
Scope         : ${scope}
Reassignment  : ${reassign}
Redeclaration : ${redeclare}
    }

};


const iterator=createIterator(variable)
 let result=""
 let step= iterator.next()

 while(!step.done){
    result +=anaylazeVariable(step.value)
    step=iterator.next()
 }

 console.log(result )


 console.log("/n===== reflection logs =====")

console.log("reflection 1")

for(var i =0 ; i< 3;i++){
    setTimeout(()=>{
        console.log("var loop:",i)
    },1000)
}

console.log("reflection 2")
for(let j=0; i<3;j++){
    setTimeout(()=>{
        console.log("let loop")
    },1000)
}
console.log("reflection 3")

const skills=["HTML"]
skills.push("CSS")
console.log("const arry modification",skills)