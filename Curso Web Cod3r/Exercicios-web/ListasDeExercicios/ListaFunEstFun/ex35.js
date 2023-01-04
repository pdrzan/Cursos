vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]
console.log(vetorPilha.length)
function adicionaVetor(vetorPilha, vetorAdiciona) {
    for(x in vetorAdiciona) {
        vetorPilha.push(vetorAdiciona[x])
        console.log(vetorAdiciona[x])
    }
    console.log('Vetor Adiciona: ' + vetorAdiciona)
    console.log('Vetor Pilha: ' + vetorPilha)
}
adicionaVetor(vetorPilha, vetorAdiciona)