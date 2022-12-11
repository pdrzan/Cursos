// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Computador', preco: 5000, marca: 'Dell'
})

console.log("Extensível: ", Object.isExtensible(produto))

produto.nome = 'Notebook'
produto.descricao = 'Personal Computer'
delete produto.marca
console.log(produto)

// Object.seal
const pessoa = { nome: 'Joao', idade: 20 } 
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = 'Machado'
delete pessoa.idade
pessoa.nome = 'Ana'
console.log(pessoa)

// Object.freeze = seal + valores constantes