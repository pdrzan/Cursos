const { parallel, series } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    monitorarArquivos,
    servidor
)