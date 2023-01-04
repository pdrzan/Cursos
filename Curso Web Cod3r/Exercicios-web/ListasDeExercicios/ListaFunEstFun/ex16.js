function calculadora(n1, string, n2) {
    switch (string) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operção inválida'
    }
}

console.log(calculadora(3,'+', 2))
console.log(calculadora(3,'-', 2))
console.log(calculadora(3,'/', 2))
console.log(calculadora(3,'*', 2))
console.log(calculadora(5,'+', 9))
console.log(calculadora(5,'/', 9))
console.log(calculadora(5,'*', 9))
console.log(calculadora(5,'-', 9))