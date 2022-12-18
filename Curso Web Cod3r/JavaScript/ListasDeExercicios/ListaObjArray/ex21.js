function menorNumero(arrayNumeros) {
    return arrayNumeros.reduce(function (n1, n2) {
        if(n1 < n2) {
            return n1
        } else {
            return n2
        }
    })
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))