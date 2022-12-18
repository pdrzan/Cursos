function removerVogais(string) {
    return string.replace('a', '').replace('e', '').replace('o', '').replace('u', '').replace('i', '')
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))