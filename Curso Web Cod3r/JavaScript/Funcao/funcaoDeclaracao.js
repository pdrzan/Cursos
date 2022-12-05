console.log(soma(3,4)) // isso funciona porque no tipo function declaration o interpretador carrega todas as funções antes da primeira linha

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3,4))

// os 2 últimos tipos não são carregados previamente pelo interpretador