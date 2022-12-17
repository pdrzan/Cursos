const produtos = [
    { nome: 'Bola de basquete', preco: 149.99, fragil: false },
    { nome: 'Notebook', preco: 2149.99, fragil: true },
    { nome: 'Taça de vidro', preco: 39.99, fragil: true },
    { nome: 'Caneta', preco: 3.99, fragil: false },
]

console.log(produtos.filter(function (p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))