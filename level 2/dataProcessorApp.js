console.log("Data Processing App")

const orders = [
    { id: 1, customer: "Abeer", amount: 1200, status: "completed", item: 2 },
    { id: 2, customer: "Ali", amount: 1100, status: "pending", item: 3 },
    { id: 3, customer: "Zaid", amount: 1500, status: "completed", item: 2 },
    { id: 4, customer: "Daniyal", amount: 1400, status: "pending", item: 2 },
    { id: 5, customer: "Huzifa", amount: 2000, status: "completed", item: 4 }
]
function createProcessor() {
    let runcount = 0
    return function processData(data, minAmount) {
        runcount++
        console.log(` processing Run #${runcount}---`)


        const filtered = data.filter(({ status, amount }) => {
            console.log("filtering", status, amount)
            return status === "completed" && amount >= minAmount
        })

        const transform = filtered.map(({ id, customer, amount, ...rest }) => {
            console.log("Mapping", customer)
            return {
                orderId: id,
                cliet: customer,
                totalAmount: amount,
                ...rest,
                category: amount > 1000 ? "Premium" : "Standard"
            }
        })

        const totalRevenue = transform.reduce((acc, order) => {
            console.log("Reducing", order.cliet, order.totalAmount)
            return acc + order.totalAmount
        }, 0)

        console.log("Final Data", transform)
        console.log("Total Revenue", totalRevenue)

        return {
            runcount,
            transform,
            totalRevenue,
        }



    }
}
 let processOrder=createProcessor()
processOrder(orders,1000)
processOrder(orders,1500)