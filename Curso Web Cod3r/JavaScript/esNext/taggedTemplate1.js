// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const nome = 'João'
const idade = 30
console.log(tag `Meu nome é ${nome} e tenho ${idade} anos`)
console.log(tag(`Meu nome é ${nome} e tenho ${idade} anos`))

