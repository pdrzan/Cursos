const primeiroElemento = arrayOuSring => arrayOuSring[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Joao', 'Joana', 'Maria'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)