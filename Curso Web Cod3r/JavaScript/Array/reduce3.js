Array.prototype.reduce2 = function (callback, valorInicial) {
    if(valorInicial) {
        acumulador = valorInicial
        for(let i = 0; i < this.length; i++) {
            acumulador = callback(acumulador, this[i], i, this)
        }
    }
    else {
        acumulador = this[0]
        for(let i = 1; i < this.length; i++) {
            acumulador = callback(acumulador, this[i], i, this)
        }
    }
    return acumulador
}


const alunos = [
    { nome: 'Pedro', nota: 10.00, bolsista: false },
    { nome: 'Maria', nota: 9.75, bolsista: true },
    { nome: 'José', nota: 5.50, bolsista: true },
    { nome: 'João', nota: 2.35, bolsista: true }
]

const bolsas = alunos.map(aluno => aluno.bolsista)

// Todos os alunos são bolsistas?

const todosBolsistas = bolsas.reduce2(function (atual, resultado) {
    return atual && resultado
}) 

// Algum aluno é bolsista?

const algumBolsista = bolsas.reduce2(function (atual, resultado) {
    return atual || resultado
}) 

console.log(todosBolsistas, algumBolsista)