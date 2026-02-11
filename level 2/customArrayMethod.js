const order=[
    {id:1,price:150,qty:1,status:"delivered"},
    {id:3,price:200,qty:1,status:"delivered"},
    {id:4,price:300,qty:1,status:"cancelled"},
    {id:3,price:1250,qty:1,status:"pending"},
     {id:3,price:1250,qty:1,status:"cancelled"}
    
]
const delivered=order.filter(order=>order.status==="delivered")
const totalRevenue=delivered.reduce((sum,order)=>{
    return sum + order.qty * order.price

},0)
console.log(totalRevenue)



