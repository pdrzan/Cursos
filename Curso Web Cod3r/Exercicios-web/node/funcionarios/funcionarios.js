const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// axios.get(url).then(response => {
//     const funcionarios = response.data
//     console.log(funcionarios.filter((funcionario) => funcionario.genero === 'F').filter((funcionario) => funcionario.pais === 'China').reduce(function (f1, f2) {
//         if (f1.salario < f2.salario) {
//             return f1
//         } else {
//             return f2
//         }
//     }))
// })

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (f1, f2) => {
    return f1.salario < f2.salario ? f1 : f2
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})