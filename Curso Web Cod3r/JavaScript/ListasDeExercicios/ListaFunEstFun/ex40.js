function conceitoNota(vetor) {
    vetorConceitos = []
    for(x in vetor) {
        if(vetor[x] < 5) {
            vetorConceitos.push('D')
        } else if(vetor[x] < 7) {
            vetorConceitos.push('C')
        } else if(vetor[x] < 9) {
            vetorConceitos.push('B')
        } else if(vetor[x] <= 10){
            vetorConceitos.push('A')
        } else {
            vetorConceitos.push('Nota inválida')
        }
    }
    console.log("Eis os conceitos: " + vetorConceitos)
}

conceitoNota([1,2,3,4,5,6,7,8,9,10, 'a', 11])