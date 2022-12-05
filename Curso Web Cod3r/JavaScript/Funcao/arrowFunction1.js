let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = (a) => a * 2 // retorno implícito
console.log(dobro(Math.E))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // O _ faz com que a função tenha um parâmetro

console.log(ola())