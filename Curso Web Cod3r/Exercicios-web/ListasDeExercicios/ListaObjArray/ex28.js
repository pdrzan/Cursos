function filtrarPorQuantidadeDeDigitos(arrayNumeros, digitos) {
    return arrayNumeros.filter((numero) => numero >= 10 ** (digitos - 1))
}

console.log(filtrarPorQuantidadeDeDigitos([1, 10, 100, 1000, 10000], 5))
console.log(filtrarPorQuantidadeDeDigitos([1, 10, 100, 1000, 10000], 4))
console.log(filtrarPorQuantidadeDeDigitos([1, 10, 100, 1000, 10000], 3))
console.log(filtrarPorQuantidadeDeDigitos([1, 10, 100, 1000, 10000], 2))
console.log(filtrarPorQuantidadeDeDigitos([1, 10, 100, 1000, 10000], 1))