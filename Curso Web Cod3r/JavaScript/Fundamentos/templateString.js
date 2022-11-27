// ES2015

const nome = 'Rebeca'
const contatenacao = 'Ola ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(contatenacao, template) // template considera quebras de linhas/tabs
console.log(`1 + 1 = ${1 + 1}`) // só soma dentro de ${ }

const up = s => s.toUpperCase() + "!!!"

console.log(`Ei... ${up('cuidado')}`) // pode chamar função dentro de ${ }