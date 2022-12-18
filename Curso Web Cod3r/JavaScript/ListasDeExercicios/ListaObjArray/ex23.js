function contarPalavras(string) {
    return string.split(' ').reduce((atual) => atual + 1, 0)
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Sou uma frase agora sim"))