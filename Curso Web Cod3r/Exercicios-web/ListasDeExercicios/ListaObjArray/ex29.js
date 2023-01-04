function segundoMaior(arrayNumeros) {
    return arrayNumeros.sort((a, b) => a - b)[arrayNumeros.length - 2]
}
console.log(segundoMaior([1,23,12,3,123,12,2]))
console.log(segundoMaior([8, 4, 5, 6]))
