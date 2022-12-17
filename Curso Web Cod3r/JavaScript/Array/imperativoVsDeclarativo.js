const alunos = [
    { nome: 'João', nota: 10.00},
    { nome: 'Maria', nota: 9.00}
]

// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const notas = aluno => aluno.nota
const total = (total, atual) => total + atual
const total2 = alunos.map(notas).reduce(total)
console.log(total2 / alunos.length)