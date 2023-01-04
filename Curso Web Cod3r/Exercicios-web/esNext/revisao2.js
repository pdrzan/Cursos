// Arrow Function
const soma = (a, b) => a + b
console.log(soma(3, 5))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // this de funcao arrow nunca muda
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Padrão') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Parametro passado')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 4, 4, 5, 1, 2))