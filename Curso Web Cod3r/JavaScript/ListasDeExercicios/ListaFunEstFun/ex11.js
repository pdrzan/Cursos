function bissexto(ano) {
    if(ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto`)
        return true
    } else if(ano % 100 == 0) {
        console.log(`O ano ${ano} não é bissexto`)
        return false
    } else if(ano % 4 == 0) {
        console.log(`O ano ${ano} é bissexto`)
        return true
    } else {
        console.log(`O ano ${ano} não é bissexto`)
        return false
    }
}

console.log(bissexto(400))
console.log(bissexto(500))
console.log(bissexto(2000))
console.log(bissexto(2004))
console.log(bissexto(2003))
console.log(bissexto(2404))