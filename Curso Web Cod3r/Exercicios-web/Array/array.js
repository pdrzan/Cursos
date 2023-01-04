console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Pedro', 'Joao')
console.log(aprovados)

aprovados = ['Bia', 'Pedro', 'Joao']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Luiz'
aprovados.push('Maria')
console.log(aprovados.length)

aprovados[10] = 'Juliana'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)

delete aprovados[3]
console.log(aprovados[3])
console.log(aprovados[4])

aprovados = ['Bia', 'Pedro', 'Joao']
aprovados.splice(1, 1, 'Nome1', 'Nome2')
console.log(aprovados)