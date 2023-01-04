let valor // nao inicializada
console.log(valor)

valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 1239
console.log(produto)

produto.preco = undefined  // evitar
console.log(produto)
console.log(!!produto.preco)

produto.preco = null
console.log(produto)