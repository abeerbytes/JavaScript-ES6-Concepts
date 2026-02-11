const order=[
    {id:1,price:99,qty:1},
    {id:2,price:180,qty:2},
    {id:3,price:250,qty:3}
]

// console.log("MAP")

// const result= order.map((order,index)=>{
//     console.log("step",index,"input",order)
// const total=order.price*order.qty
// console.log("step",index,"output",total)
// return total
 


// })
// console.log("myResult",result) 


console.log("FOR EACH")
const forEachResult=[];

order.forEach((order,index)=>{
    console.log("step",index,"input",order)
    const total=order.price*order.qty
    console.log("step",index,"output",total)
    forEachResult.push(total)
    return total
    
})
console.log("forEachResult",forEachResult)



console.log("REDUCE");
const reduceResult = order.reduce((acc, order, index) => {
  console.log("step:", index);
  console.log("acc before:", acc);
  console.log("current:", order);

  const total = order.price * order.qty;
  acc.push(total);

  console.log("acc after:", acc);
  return acc;
}, []);

console.log("reduce final result:", reduceResult);