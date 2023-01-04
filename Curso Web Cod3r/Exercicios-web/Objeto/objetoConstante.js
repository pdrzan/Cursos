// pessoa -> 123 -> {...}
const pessoa = { nome: 'Ana' }
pessoa.nome = 'Joao'
console.log(pessoa.nome)

// pessoa -> 312 -> {...}
// pessoa = { codigo: 123 } // erro pois pessoa nao pode deixar de apontar para outro endereço já que é const
// console.log(pessoa)

Object.freeze(pessoa) // garante que o objeto pessoa não mudará
pessoa.nome = 'Pedro' // não da erro mas não muda o nome de pessoa
pessoa.enderço = 'Rua ABC'

console.log(pessoa)

const pessoaConstante = Object.freeze({ pessoa: 'constante' }) 
pessoaConstante.pessoa = 'Mudar'
console.log(pessoaConstante)