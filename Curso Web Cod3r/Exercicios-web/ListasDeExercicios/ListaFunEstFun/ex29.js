function intervaloEntreDezEVinte(vetor) {
    qtdNoIntervalo = 0
    qtdFotaDoIntervalo = 0
    for(x in vetor) {
        if(vetor[x] >= 10 && vetor[x] <=20) {
            qtdNoIntervalo++
        } else {
            qtdFotaDoIntervalo++
        }
    }
    return `${qtdNoIntervalo} números estão no interalo [10, 20] e ${qtdFotaDoIntervalo} números estão fora`
}

console.log(intervaloEntreDezEVinte([1,2,3,4,5,6,7,8,9]))
console.log(intervaloEntreDezEVinte([10,11,12,13,14,15,16,17,18,19,20]))
console.log(intervaloEntreDezEVinte([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))