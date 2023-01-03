function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = Math.floor(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 30, 4000),
        gerarNumerosEntre(1, 30, 500),
        gerarNumerosEntre(1, 30, 3000),
        gerarNumerosEntre(1, 30, 100),
        gerarNumerosEntre(1, 30, 400),
        gerarNumerosEntre(1, 30, 600)
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })