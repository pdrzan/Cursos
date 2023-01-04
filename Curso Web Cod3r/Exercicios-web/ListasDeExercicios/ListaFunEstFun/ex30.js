function maiorMenor(vetor) {
    maior = vetor[0]
    menor = vetor[0]
    for(x in vetor) {
        if(vetor[x] > maior) {
            maior = vetor[x]
        }
        if(vetor[x] < menor) {
            menor = vetor[x]
        }
    }
    return `O menor valor no vetor é ${menor} e o maior é ${maior}`
}

console.log(maiorMenor([1,2,3,4,5,6,7,8,9,10]))
console.log(maiorMenor([1,1,-1,-10,56,0,7,8,9,10]))
console.log(maiorMenor([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]))