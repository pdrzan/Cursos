// operador ... rest/spread
// usar rest com parametro de função -> revisao2.js

// Usar spread com Objeto
const pessoa = { nome: 'Carlao', idade: 30}
const clone = { endereço: 'Rua Tal, 1231', ...pessoa}
console.log(clone)

// Usar spread com Array
const grupoA = ['Basquete', 'Futebol', 'Tênis']
const grupoB = ['Hóquei', ...grupoA, 'Futebol Americano']
console.log(grupoB)
