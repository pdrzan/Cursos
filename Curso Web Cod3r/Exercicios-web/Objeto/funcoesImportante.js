const pessoa = {
    nome: 'Joao',
    idade: 13,
    peso: 59
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1904'
})

pessoa.dataNascimento = '01/04/2102'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 3 }
const o2 = { c: 4, a: 6 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)
