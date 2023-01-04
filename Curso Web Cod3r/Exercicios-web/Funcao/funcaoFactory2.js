function criarProduto(nome, preço) {
    return {
        nome, // igual a nome: nome,
        preço, // igual a preço: preço,
        desconto: 0.2
    }
}

console.log(criarProduto('Xampoo', 20))
console.log(criarProduto('Celular', 2000))