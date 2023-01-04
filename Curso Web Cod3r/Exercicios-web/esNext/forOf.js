for(let letra of 'Problema') {
    console.log(letra)
}

const assuntos = ['Map', 'Set', 'Promisse']

for(let i in assuntos) {
    console.log(i)
}

for(let assunto of assuntos) {
    console.log(assunto)
}

const assuntosAbordados = new Map([
    ['Map', { abordado: true} ],
    ['Set', { abordado: true} ],
    ['Promisse', { abordado: false} ]
])

for(let assunto of assuntosAbordados) {
    console.log(assunto)
}

for(let chave of assuntosAbordados.keys()) {
    console.log(chave)
}

for(let valor of assuntosAbordados.values()) {
    console.log(valor)
}

for(let [ch, vl] of assuntosAbordados.entries()) {
    console.log(ch, vl)
}

const set = new Set(['a', 'b', 'c'])
for(let letra of set){
    console.log(letra)
}