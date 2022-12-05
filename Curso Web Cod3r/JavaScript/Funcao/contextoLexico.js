const valor = 'Global'

function minhaFuncao() { // a função carrega consigo o contexto onde ela foi criada
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()