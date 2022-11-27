function rand([min = 0, max = 1000] ) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand([40, 50]))
console.log(rand([50, 40]))
console.log(rand([995]))
console.log(rand([30, 30]))
console.log(rand([,,31]))
console.log(rand([]))
console.log(rand()) // nao funciona pois min e max sao undefined

