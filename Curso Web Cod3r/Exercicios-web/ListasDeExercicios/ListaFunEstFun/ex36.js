function vetorMultiplica1(vetor, mult) {
    for(x in vetor) {
        vetor[x] *= mult
    }
    return vetor
}

function vetorMultiplica2(vetor, mult) {
    for(x in vetor) {
        if (vetor[x] > 5) {
            vetor[x] *= mult
        }
    }
    return vetor
}

console.log(vetorMultiplica1([1,2,3,4,5,6], 5))
console.log(vetorMultiplica2([1,2,3,4,5,6], 5))