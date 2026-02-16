function processUser( callBack=function (){
        console.log("default callback excuted")
    },
    config={role:"guest",active:true}
    ){
        console.log("Before modification",config)

        config.role="Admin"

        callBack()

        console.log("after modifiction",config)
   
}
processUser()
