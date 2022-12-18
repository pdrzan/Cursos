function multiplicar(num1, num2) {
    resultado = 0
    for(let i = 0; i < num1; resultado += num2, i++);
    return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))