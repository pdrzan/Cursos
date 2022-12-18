function receberMelhorEstudante(objAlunos) {
    const arrayAlunos = Object.entries(objAlunos)
    resultado = arrayAlunos.reduce(function(atual, aluno) {
        media = aluno[1].reduce((agora, acumulador) => agora + acumulador) / aluno[1].length
        if(media > atual[1].reduce((agora, acumulador) => agora + acumulador) / atual[1].length) {
            atual = aluno
        }
        return atual
    }, ['', [0]])
    return { nome: resultado[0], media: (resultado[1].reduce((a, b) => a + b)/resultado[1].length)}
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))