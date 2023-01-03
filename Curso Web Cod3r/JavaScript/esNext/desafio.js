const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// Minha resposta
function lerArquivo(caminho) {
    return new Promise(resolve => {
        resolve(fs.readFileSync(caminho).toString())
    })
}

lerArquivo(caminho)
    .then(arquivo => console.log(arquivo))

// Resposta professor
function lerArquivo2(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}
lerArquivo2(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)