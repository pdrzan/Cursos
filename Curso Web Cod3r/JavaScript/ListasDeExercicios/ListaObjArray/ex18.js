function despesasTotais(arrayProdutos) {
    return arrayProdutos.reduce((atual, acumulador) => atual + acumulador.preco, 0)
}

console.log(despesasTotais([
    { nome: 'Jornal', categoria: 'Informação', preco: 89.99},
    { nome: 'Cinema', categoria: 'Entreterimento', preco: 150},
]))
console.log(despesasTotais([
    { nome: 'Celular', categoria: 'Eletrônicos', preco: 1600},
    { nome: 'Computador', categoria: 'Eletrônicos', preco: 5010},
]))