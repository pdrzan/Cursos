// novo recurso Es2015
// destructuring = extrair atributos de um objeto/array
const pessoa = {
    nome: 'Pedro',
    idade: 21,
    endereço: {
        rua: 'Rua da Paz',
        numero: 1231
    }
}

const { nome, idade} = pessoa // tira as variaveis nome e idade do objeto pessoa
console.log(nome, idade)


const { nome: n, idade: i} = pessoa // unica difereça é q n e i que são as variaveis atribuidas
console.log(n, i)

const {endereço} = pessoa
const {endereço: {rua, numero, cep = 12831}} = pessoa
console.log(endereço) // só funciona por causa da linha 18
console.log(rua, numero, cep)

const {sobrenome, sexo = 'masculino'} = pessoa
console.log(sobrenome, sexo)