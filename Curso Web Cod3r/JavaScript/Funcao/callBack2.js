const notas = [7.7, 8.8, 9.9, 10, 2.2, 4.4, 5.5, 6.6]
// Sem callback
const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)
// Com callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)
notasMenoresQueSete = nota => nota < 7
notasBaixas3 = notas.filter(notasMenoresQueSete)
console.log(notasBaixas3)