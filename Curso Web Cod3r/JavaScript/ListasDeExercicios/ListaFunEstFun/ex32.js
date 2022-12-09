function mediaVetor(vetor) {
    soma = 0
    for(x in vetor) {
        soma += vetor[x]
    }
    console.log(soma / (vetor.length))
}

mediaVetor([2,3,3,1,3,5,1,3,1,2,3,4,1])
mediaVetor([1,1,1,1,1,1,1,1])
