function calcularMedia(arrayNumeros) {
    return (arrayNumeros.reduce((atual, acumulador) => atual + acumulador) / arrayNumeros.length)
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))