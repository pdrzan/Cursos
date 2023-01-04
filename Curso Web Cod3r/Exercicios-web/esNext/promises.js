function falarDepois(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // Só retorna 1 parâmetro
        }, segundos * 1000)
    })
}

falarDepois(3, 'Caraca mlk que dia que isso')
    .then(frase => frase.concat('!!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))