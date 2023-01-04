const peso1 = 1.0  
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.32183
const avaliacao2 = 3.12381

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(3))
console.log(media.toString(20)) // converte para a base x da função toString(x), no caso a base 20
console.log(typeof media)