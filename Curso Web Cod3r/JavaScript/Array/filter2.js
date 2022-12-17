Array.prototype.filter2 = function (callback) {
    const array = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
}

const produtos = [
    { nome: 'Bola de basquete', preco: 149.99, fragil: false },
    { nome: 'Notebook', preco: 2149.99, fragil: true },
    { nome: 'Taça de vidro', preco: 39.99, fragil: true },
    { nome: 'Caneta', preco: 3.99, fragil: false },
]

console.log(produtos.filter2(function (p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))