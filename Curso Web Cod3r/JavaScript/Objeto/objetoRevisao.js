// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cubo-mágico'
produto['marca do produto'] = 'rubix'
produto.preco = 20

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'G20',
    valor: 2000000,
    proprietario: {
        nome: 'Elon Musk',
        idade: 51,
        endereço: {
            logadouro: 'Corporate Secretary, Tesla, Inc. Deer Creek Road, Palo Alto, CA 94304 United States',
            numero: 3500
        }
    },
    condutores: [{
        nome: 'Joao',
        idade: 21
    }, {
        nome: 'Maria',
        idade: 78
    }],
    calcularValorSeguro() {
        // ...
    }
}

carro.proprietario.endereço.numero = 2000
carro['proprietario']['endereço']['logadouro'] = 'Rua tal'
console(carro)

// delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
