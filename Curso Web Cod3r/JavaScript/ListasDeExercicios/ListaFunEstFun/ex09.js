function notas(notaAluno) {
    if(notaAluno < 38) {
        return `Aluno reprovado, nota final: ${notaAluno}`
    }
    else {
        if(notaAluno % 5 == 0) {
            return `Aluno aprovado, nota final: ${notaAluno}`
        }
        else if(5 - notaAluno % 5 < 3){
            notaAluno += 5 - notaAluno % 5
            return `Aluno aprovado, nota final: ${notaAluno}`
        }
        else {
            return `Aluno aprovado, nota final: ${notaAluno}`
        }
    }
}

console.log(notas(38))
console.log(notas(40))
console.log(notas(43))
console.log(notas(56))
console.log(notas(80))