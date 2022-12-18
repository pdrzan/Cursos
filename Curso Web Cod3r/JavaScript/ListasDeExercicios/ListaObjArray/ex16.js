function checarAnoBissexto(ano) {
    if(ano % 400 === 0) {
        return true
    } else if(ano % 100 === 0) {
        return false
    } else if(ano % 4 === 0) {
        return true
    } else {
        return false
    }
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(2104))
console.log(checarAnoBissexto(2103))
console.log(checarAnoBissexto(400))
console.log(checarAnoBissexto(402))