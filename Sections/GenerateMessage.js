function GenerateMessge(UserName, CourseName, completion) {

    return `hello ${UserName}, you have successfully completed the course:
     ${CourseName} with a completion of ${completion}%`

}
const message=GenerateMessge("abeer","JavaScript",80)
console.log(message)