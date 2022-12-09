function frutas(nomeFruta) {
    switch (nomeFruta) {
        case 'maça':
            return "Não vendemos essa fruta aqui"
        case 'kiwi':
            return "Estamos com escassez de kiwis"
        case 'melancia':
            return "Aqui está, são 3 reais o quilo"
        default: 
            return "Não conhecemos essa fruta"
    }
}

console.log(frutas('maça'))
console.log(frutas('kiwi'))
console.log(frutas('melancia'))
console.log(frutas('banana'))
console.log(frutas(19))