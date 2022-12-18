function objetoParaArray(obj) {
    return Object.entries(obj)
}

console.log(objetoParaArray({ nome: 'Maria', profissão: 'Pedreira'}))
console.log(objetoParaArray({ codigo: 1111, preco: 25}))