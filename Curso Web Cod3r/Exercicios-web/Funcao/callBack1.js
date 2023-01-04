const times = ['Warriors', 'Bulls', 'Clippers', 'Lakers', 'Celtics', 'Pistons', 'Pelicans']

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome} `)
}

times.forEach(imprimir)
times.forEach((time) => console.log(time))
