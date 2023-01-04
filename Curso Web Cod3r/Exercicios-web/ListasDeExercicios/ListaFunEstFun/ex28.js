function qtdElementosParesImpares(vetor) {
    qtdPares = 0
    qtdImpares = 0
    for(x in vetor) {
        if(vetor[x] % 2 == 0) {
            qtdPares++
        } else { // considerando que sempre o vetor vai ser composto por numeros 
            qtdImpares++
        }
    }
    console.log(`No vetor existem ${qtdImpares} números ímpares e ${qtdPares} números pares`)
}

qtdElementosParesImpares([2,3,4,5,6,7,8,9,0,10])
qtdElementosParesImpares([2,2,4,8,6,10,12,14,16,10])
qtdElementosParesImpares([3,3,1,21,43,11,55,11,13,17])
qtdElementosParesImpares([1,2,3,4,5,6,7,8,9,10])