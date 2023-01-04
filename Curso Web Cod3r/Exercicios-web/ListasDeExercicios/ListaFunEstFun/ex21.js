function planoDeSaude(idade) {
    if(idade < 10) {
        return 180
    } else if(idade <= 30) {
        return 150
    } else if(idade <= 60) {
        return 195
    } else {
        return 230
    }
}

console.log("Valor a pagar: ", planoDeSaude(9))
console.log("Valor a pagar: ", planoDeSaude(10))
console.log("Valor a pagar: ", planoDeSaude(20))
console.log("Valor a pagar: ", planoDeSaude(30))
console.log("Valor a pagar: ", planoDeSaude(59))
console.log("Valor a pagar: ", planoDeSaude(60))
console.log("Valor a pagar: ", planoDeSaude(79))
console.log("Valor a pagar: ", planoDeSaude(84))