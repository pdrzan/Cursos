function anuidade(valor, mes) {
    if(mes <= 12) {
        return valor * ((1.05 ** (mes - 1)))
    }
    else {
        return 'Valor inválido'
    }
}

console.log("Valor da anuidade: ", anuidade(1000, 1))
console.log("Valor da anuidade: ", anuidade(1000, 2))
console.log("Valor da anuidade: ", anuidade(1000, 3))
console.log("Valor da anuidade: ", anuidade(1000, 5))
console.log("Valor da anuidade: ", anuidade(1000, 10))
console.log("Valor da anuidade: ", anuidade(1000, 12))
console.log("Valor da anuidade: ", anuidade(5000, 1))
console.log("Valor da anuidade: ", anuidade(5000, 2))
console.log("Valor da anuidade: ", anuidade(5000, 3))
console.log("Valor da anuidade: ", anuidade(5000, 5))
console.log("Valor da anuidade: ", anuidade(5000, 10))
console.log("Valor da anuidade: ", anuidade(5000, 12))
console.log("Valor da anuidade: ", anuidade(5000, 15))
