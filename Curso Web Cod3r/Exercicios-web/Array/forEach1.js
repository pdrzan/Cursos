const aprovados = ['Joao', 'Maria', 'Lucia']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
exbirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exbirAprovados)