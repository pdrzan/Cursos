function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(3,4)
imprimirSoma(2)
imprimirSoma(3,21,321,1231,231,1)
imprimirSoma(3,)
imprimirSoma()

function soma(a, b = 0){
    return a+b
}

console.log(soma(3,4))
console.log(soma(3))
console.log(soma())