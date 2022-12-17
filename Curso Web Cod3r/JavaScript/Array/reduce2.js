const alunos = [
    { nome: 'Pedro', nota: 10.00, bolsista: true },
    { nome: 'Maria', nota: 9.75, bolsista: false },
    { nome: 'José', nota: 5.50, bolsista: false },
    { nome: 'João', nota: 2.35, bolsista: false }
]

const bolsas = alunos.map(aluno => aluno.bolsista)

// Todos os alunos são bolsistas?

const todosBolsistas = bolsas.reduce(function (atual, resultado) {
    return atual && resultado
}) 

// Algum aluno é bolsista?

const algumBolsista = bolsas.reduce(function (atual, resultado) {
    return atual || resultado
}) 

console.log(todosBolsistas, algumBolsista)