function soma() {
    let soma = 0
    for (i in arguments) { //arguments contém um array com os parâmetros passados na função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1,1.3, "Sim", 2.2))
console.log(soma('a', 'b', "Nao"))
