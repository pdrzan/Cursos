function dia(x) {
    switch(x) {
        case 1:
            return "Final de Semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Final de Semana"
        default: 
            return "Dia inválido"
    }
}

console.log(dia(1))
console.log(dia(2))
console.log(dia(3))
console.log(dia(4))
console.log(dia(5))
console.log(dia(6))
console.log(dia(7))
console.log(dia(9))
console.log(dia('a'))
