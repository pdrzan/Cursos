// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Salve parceiro'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class -> Função internamente
class Animal {}
class Cachorro extends Animal {
    uivar() {
        return 'AUUUUU'
    }
}

console.log(new Cachorro().uivar())
