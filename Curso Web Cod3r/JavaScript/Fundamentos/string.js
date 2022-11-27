const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna nada pois não tem nada na posição 5
console.log(escola.charCodeAt(3)) // retorna valor na tabela unicode/asc
console.log(escola.indexOf('C'))
console.log(escola.substring(0,2))
console.log(escola.substring(1))
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") // duas formas de concatenar
console.log(escola.replace(3, 'e'))
console.log('Pedro,Ana,Mariana'.split(','))