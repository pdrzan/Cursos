function aumento(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`Seu salário final: ${salario * 1.1}`)
            return salario * 1.1
        case 'B':
            console.log(`Seu salário final: ${salario * 1.15}`)
            return salario * 1.15
        case 'C':
            console.log(`Seu salário final: ${salario * 1.2}`)
            return salario * 1.2
    }
}

console.log(aumento('A', 2000))
console.log(aumento('B', 2000))
console.log(aumento('C', 2000))
console.log(aumento('A', 4550))
console.log(aumento('B', 4550))
console.log(aumento('C', 4550))
