const carrinho = [
    ' { "nome": "Borracha", "preco": 3.45 }',
    ' { "nome": "Caderno", "preco": 13.90 }',
    ' { "nome": "Kit de Lapis", "preco": 41.22 }',
    ' { "nome": "Caneta", "preco": 7.50 }',
]
let resultado = carrinho.map(function (e) {
    objeto = JSON.parse(e)
    return objeto.preco
})

console.log(resultado)

// reposta do curso

const paraObjeto = json => JSON.parse(json)
const apenasPreco = objeto => objeto.preco

console.log(carrinho.map(paraObjeto).map(apenasPreco))