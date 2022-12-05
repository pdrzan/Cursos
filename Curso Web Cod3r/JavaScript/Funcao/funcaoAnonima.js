const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(4, 3, soma)
imprimirResultado(3, 4, (a, b) => a * b) // toda função arrow é anônima, não tem nome
imprimirResultado(3, 4, function (a, b) {
    return a * b * b - 1
})

const pessoa = {
    falar: function () {
        console.log('Olá')
    }
}

pessoa.falar()
