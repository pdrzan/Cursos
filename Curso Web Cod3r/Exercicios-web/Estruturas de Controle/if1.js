function soNoticiaBoa (nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soNoticiaBoa(7.3)
soNoticiaBoa(4.0)

function seForVerdade(valor) {
    if(valor) {
        console.log("É verdade que " + valor) 
    }
    else {
        console.log("É mentira que " + valor)
    }
}

seForVerdade('')
seForVerdade(null)
seForVerdade(undefined)
seForVerdade()
seForVerdade(0)
seForVerdade(NaN)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('Sim')
seForVerdade({})
seForVerdade({sim: 3, nao: 4})
seForVerdade([])
seForVerdade([3,3,3,1,])
