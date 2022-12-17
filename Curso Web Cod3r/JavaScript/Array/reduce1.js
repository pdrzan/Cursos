const alunos = [
    { nome: 'Pedro', nota: 10.00, bolsista: true },
    { nome: 'Maria', nota: 9.75, bolsista: false },
    { nome: 'José', nota: 5.50, bolsista: true },
    { nome: 'João', nota: 2.35, bolsista: false }
]

const resultado = alunos.map(aluno => aluno.nota).reduce(function (atual, acumulador) {
    console.log(atual, acumulador)
    return acumulador + atual
}, 0)

console.log(resultado)