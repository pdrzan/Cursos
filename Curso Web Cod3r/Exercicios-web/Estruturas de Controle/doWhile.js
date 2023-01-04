function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(typeof sim)
do { // obriga que o while vai 'entrar' pelo menos 1 vez
    opcao = getInteiroAleatorio(-1, -1)
    console.log(`Opção escolhida foi ${opcao}`)
} while(opcao != -1)

console.log("Acabou, é TETRA")