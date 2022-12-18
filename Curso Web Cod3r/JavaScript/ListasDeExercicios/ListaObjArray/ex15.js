function parEIndicePar(array) {
    resultado = []
    for(let i = 0; i < array.length; i += 2) {
        if(array[i] % 2 === 0) {
            resultado.push(array[i])
        }
    } 
    return resultado
}

console.log(parEIndicePar([1, 2, 3, 4, 5]))
console.log(parEIndicePar([1, 2, 3, 4, 6]))
console.log(parEIndicePar([10, 70, 22, 43]))