const numbers=[1,2,3,4,5]

const RealMap=numbers.map((num,index)=>{
 return num * 2   
})
console.log("realMap",RealMap)


function MyMap(array,callback){
    const result= []
    for(let i=0 ; i<array.length;i++){
        console.log("callback excuted for index",i)
        const callBackResult=callback(array[i],i,array)
        result.push(callBackResult)

    }
    return result

}


const customMapResult=MyMap(numbers,(num,index)=>{
    console.log("Inside callBack → value",num)
    return num * 2


})
console.log("CustomMap",customMapResult)