function lanchonete(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return `R$:${(3 * quantidade).toFixed(2)}`
        case 200:
            return `R$:${(4 * quantidade).toFixed(2)}`
        case 300:
            return `R$:${(5.5 * quantidade).toFixed(2)}`
        case 400:
            return `R$:${(7.5 * quantidade).toFixed(2)}`
        case 500:
            return `R$:${(3.5 * quantidade).toFixed(2)}`
        case 600:
            return `R$:${(2.8 * quantidade).toFixed(2)}`
        default:
            return "Produto não encontrado"
    }
}

console.log(lanchonete(100, 5))
console.log(lanchonete(200, 5))
console.log(lanchonete(300, 5))
console.log(lanchonete(400, 5))
console.log(lanchonete(500, 5))
console.log(lanchonete(600, 5))
console.log(lanchonete(700, 5))