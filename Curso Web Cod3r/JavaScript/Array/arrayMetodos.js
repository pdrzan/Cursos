const pilotos = ['Massa', 'Senna', 'Alonso', 'Vettel']
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar/remover elementos
// adcionar
pilotos.splice(2, 0, 'Bottas', 'Vettel')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(pilotos)