function repetir(repetido, vezes) {
    resultado = []
    for(let i = 0; i < vezes; i++, resultado.push(repetido));
    return resultado
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))