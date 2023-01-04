// Não aceita repetição e não tem indexação
const times = new Set()
times.add('Warriors')
times.add('Pelicans').add('Pistons').add('Lakers').add('Celtics')
times.add('Warriors')

console.log(times)
console.log(times.size)
console.log(times.has('pistons'))
console.log(times.has('Pistons'))
times.delete('Pistons')
console.log(times.has('Pistons'))

const jmaisao = ['Joana', 'Joao', 'Joao Pedro', 'Jao']
const jmaisaoSet = new Set(jmaisao)
console.log(jmaisaoSet)
