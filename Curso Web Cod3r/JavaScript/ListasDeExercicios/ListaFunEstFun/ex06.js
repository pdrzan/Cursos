function jurosSimples(capital, juros, tempo) {
    return capital + (capital * juros * tempo)
}

function jurosCompostos(capital, juros, tempo) {
    return capital * ((1 + juros) ** tempo)
}

console.log(jurosCompostos(1000, 0.2, 10))
console.log(jurosSimples(1000, 0.2, 10))

console.log(jurosCompostos(1000, 0.2, 20))
console.log(jurosSimples(1000, 0.2, 20))

console.log(jurosCompostos(1000, 0.2, 100))
console.log(jurosSimples(1000, 0.2, 100))