const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 231.1231
prod1['Descontolegal'] = 0.4
prod1['Desconto legal'] = 0.4 // única diferença entre os 2 é que um tem espaço e o outro não


console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 12132,
        obj: {
            blabla: 2132
        }
    }
}
// json é uma forma textual para comunicação de sistemas json = javascript object notation != objeto
console.log(prod2)