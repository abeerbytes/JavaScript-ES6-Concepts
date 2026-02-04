const numbers={
    [Symbol.iterator](){
        let count=1
        return{
            next(){
                if(count<=5){
                    return{value:count++,done:false}
                }
                else{
                    return{value:"stop",done:true}

                }
            }
        }
    }
}
const iterator=numbers[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


