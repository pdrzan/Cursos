function imprimirResultado(nota) {
    switch(Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Caralho mlk q dia q isso')
            break // precisa do break pra sair do stwitch de vez se nao o programa irá executar tudo embaixo
        case 8: case 7:
            console.log('Ta indo bem mlk')
            break
        case 6: case 5: case 4:
            console.log('Vai se criando um clima teriiiiivel')
            break
        case 3: case 2: case 1: case 0:
            console.log('Perdemo...')
            break
        default:
            console.log('Perdidinho no pagode')   
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(-1)
imprimirResultado(2)
imprimirResultado('Sim')
imprimirResultado(null)
imprimirResultado(undefined)
imprimirResultado(NaN)

