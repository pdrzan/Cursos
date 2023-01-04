function funcionarOuNao(string, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            // con.log()
            if (Math.floor < chanceErro) {
                reject('Ocorreu um Erro')
            } else {
                resolve(string)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        erro => console.log(`Erro específico: ${erro}`)
    )
    .then(() => console.log('Quase Fim'))
    .catch(erro => console.log(`Erro geral: ${erro}`))
    .then(() => console.log('Fim!'))