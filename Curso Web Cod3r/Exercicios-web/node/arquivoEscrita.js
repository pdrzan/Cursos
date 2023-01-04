const fs = require('fs')

const produto = {
    nome: 'Notebook',
    preco: 4999.99,
    desconto: 0.1
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})