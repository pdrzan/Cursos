function revenda(carro) {
    switch (carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
            return 'Tem certeza que não prefere esse modelo?'
        case 'motocicleta':
            return 'Tem certeza que não prefere esse modelo?'
        case 'caminhonete':
            return 'Tem certeza que não prefere esse modelo?'
        default: 
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(revenda('hatch'))
console.log(revenda('sedan'))
console.log(revenda('motocicleta'))
console.log(revenda('caminhonete'))
console.log(revenda('ferrario'))