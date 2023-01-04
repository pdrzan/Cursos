function removerPropriedade(obj, propriedade) {
    delete obj[propriedade]
    return obj
}

console.log(removerPropriedade({a: 1, b: 2}, "b"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))