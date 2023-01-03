function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    }) 
    if (partes.length > valores.length) resultado.push(partes[partes.length - 1])
    return resultado.join('')
}

const preco = 179.2
const precoParecela = 50
console.log(real `1x de ${preco} ou 4x de ${precoParecela}.`)
console.log(real `1x de ${preco} ou 4x de ${precoParecela}`)