let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log("verdadeiros: ")
console.log(!!isAtivo)
console.log(!!3)
console.log(!!-3)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!` `)
console.log(!!(isAtivo = 11))

console.log("falsos: ")
console.log(!!"")
console.log(!!null)
console.log(!!0)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = null))
console.log(!!("" || null || NaN))
console.log(("" || null || NaN ))