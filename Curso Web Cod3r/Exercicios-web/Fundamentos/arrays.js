const valores = [7.7, 9.8, 6.45, 1.231]
console.log(valores[0], valores[2])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste' ) // push: adicionar elementos no fim do array; array aceita varios tipos de atributos
console.log(valores)

console.log(valores.pop()) // pop retorna o ultimo elemento do array e retira-o do array
delete valores[0]
console.log(valores)
console.log(typeof valores)