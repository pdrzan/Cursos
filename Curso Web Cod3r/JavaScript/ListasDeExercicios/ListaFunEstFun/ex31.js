function quantosNegativos(vetor) {
    qtdNegativos = 0
    for(x in vetor) {
        if(vetor[x] < 0) {
            qtdNegativos++
        }
    }
    console.log(`Há ${qtdNegativos} números negativos no vetor`)
}

quantosNegativos([-1,-2,-2,1,4,5,1,-1,-100,12])