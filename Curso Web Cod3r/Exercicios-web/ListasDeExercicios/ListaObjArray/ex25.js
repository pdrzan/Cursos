function buscarPalavrasSemelhantes(string, arrayStrings) {
    return arrayStrings.filter(function(atual) {
        if(atual.includes(string)) {
            return atual
        }
    })
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))