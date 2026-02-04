const user={
    name:"abeer",

    showName: function(){
        setTimeout(function(){
            console.log("this.name:",this.name)
            console.log("this:",this)
        },1000)
    }
}

user.showName()


const user2={
    name:"zaid",
    showName2: function(){
        setTimeout(()=>{
            console.log("this.name:",this.name)
            console.log("this:",this)
        },1000)
    }

}
user2.showName2()

