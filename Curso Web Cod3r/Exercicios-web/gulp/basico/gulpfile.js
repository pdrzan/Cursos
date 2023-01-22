const gulp = require('gulp')
const { series, parallel } = require('gulp')
const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}
const antes2 = cb => {
    console.log('Tarefa Anetes 2')
    return cb()
}
function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        // .pipe(imagemAlterada())
        // .pipe(transformarImagem())
        // .pipe(transforma1())
        // .pipe(transforma2())
        // .pipe(transforma3())
        .pipe(gulp.dest('pastaB'))
        return cb()
}
const fim = cb => {
    console.log('Acaba pelo amor de deus')
    return cb()
}
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)