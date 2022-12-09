function trocaElementos(vetor1, vetor2) {
    if(vetor1.length == vetor2.length) {
        for(i = 0; i < vetor1.length; i++) {
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    } else {
        return 'Vetores com tamanhos diferentes'
    }

    console.log("Vetor 01: " + vetor1)
    console.log("Vetor 02: " + vetor2)
}

trocaElementos([1,2,3,4,5], [11,12,13,14,15])