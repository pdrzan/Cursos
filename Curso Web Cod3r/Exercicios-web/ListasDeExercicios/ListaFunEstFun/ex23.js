function alunoNota(codigoAluno, notasAluno) {
    media = 0
    if(notasAluno[0] >= notasAluno[1] && notasAluno[0] >= notasAluno[2]) {
        media = (4 * notasAluno[0] + 3 * notasAluno[1] + 3 * notasAluno[2]) / 10
    } else if(notasAluno[1] >= notasAluno[0] && notasAluno[1] >= notasAluno[2]) {
        media = (3 * notasAluno[0] + 4 * notasAluno[1] + 3 * notasAluno[2]) / 10
    } else {
        media = (3 * notasAluno[0] + 3 * notasAluno[1] + 4 * notasAluno[2]) / 10
    }
    console.log(`Código do aluno: ${codigoAluno}`)
    console.log(`A média do aluno foi: ${media}`)
    if(media >= 5) {
        console.log("APROVADO")
    } else {
        console.log("REPROVADO")
    }
}

alunoNota(123, [5,5,5])
alunoNota(123, [5,4,3])
alunoNota(123, [3,5,4])
alunoNota(123, [3,4,5])
alunoNota(123, [1,1,1])
alunoNota(123, [7,4,4])
alunoNota(123, [4,7,4])
alunoNota(123, [4,4,7])
alunoNota(123, [8,5,5])
alunoNota(123, [5,8,5])
alunoNota(123, [5,5,8])
alunoNota(123, [9,5,5])
alunoNota(123, [5,9,5])
alunoNota(123, [5,5,9])
