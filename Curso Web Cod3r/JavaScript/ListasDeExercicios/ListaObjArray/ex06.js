function inverso(param) {
    switch(typeof param) {
        case 'boolean':
            return !param
        case 'number':
            return -param
        default:
            return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof param}`
    }
}
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))