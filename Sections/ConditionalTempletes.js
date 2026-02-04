function GenerateResult(studentName,score){
    if(score >= 90){
        return `congratulation ${studentName}! you have achieved ${score} marks and secured one of the top pose`
    }
    else if(score >= 75){
        return `Good job ${studentName}! you have achieved ${score} marks.`
    }
    else if(score >= 50){
        return `good effort ${studentName}! you have achieved ${score }marks.`

    }
    else{
        return `sorry${studentName}! you have ${score}`
    }

}
console.log(GenerateResult("Alice",92))
