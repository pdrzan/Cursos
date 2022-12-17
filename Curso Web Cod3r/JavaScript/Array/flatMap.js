const escola = [{
        nome: 'Turma 01',
        alunos: [{
            nome: 'Gustavo',
            nota: 9.1
        }, {
            nome: 'Mariana',
            nota: 10.00
        }]
    }, {
        nome: 'Turma 02',
        alunos: [{
            nome: 'Maria',
            nota: 6.75
        }, {
            nome: 'Thiago',
            nota: 7.2
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)