function basquete(string) {
    numeros = string.split(' ')
    for(x in numeros) {
        numeros[x] = Number(numeros[x])
    }
    pior = numeros[0]
    recorde = numeros[0]
    recordeVezes = 0
    for(x in numeros) {
        if(numeros[x] < pior) {
            pior = numeros[x]
        }
        if(numeros[x] > recorde) {
            recorde = numeros[x]
            recordeVezes++
        }
    }
    return [recordeVezes, numeros.indexOf(pior) + 1]
}

console.log(basquete("10 20 20 8 25 3 0 30 1"))