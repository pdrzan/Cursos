function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'iPad',
    desc: 0.2,
    preco: 2000,
    getPreco
}


global.preco = 201
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

carro = {preco: 100000, desc: 0.06} 
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.01, 'US$')) // diferença é a que um passa os parâmetros por array e o outro não
console.log(getPreco.apply(carro, [0.01, 'US$']))
console.log(getPreco.apply(global, [0.01, '$']))