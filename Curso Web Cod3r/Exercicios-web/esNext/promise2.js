// setTimeout(function () {
//     console.log('Executando callback')
//     setTimeout(function () {
//         console.log('Executando callback')
//         setTimeout(function () {
//             console.log('Executando callback')
//         }, 3000)
//     }, 3000)
// }, 3000)
    

function esperarTempo(tempo = 3000) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}
esperarTempo()
    .then(() => esperarTempo())
    .then(esperarTempo)