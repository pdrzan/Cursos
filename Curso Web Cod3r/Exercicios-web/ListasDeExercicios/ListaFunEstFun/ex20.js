function notas(valor) {
    if(valor >= 100) {
        n100 = 0
        while(valor >= 100) {
            valor -= 100
            n100++
        }
        console.log(`${n100} nota(s) de R$100`)
    }
    if(valor >= 50) {
        n50 = 0
        while(valor >= 50) {
            valor -= 50
            n50++
        }
        console.log(`${n50} nota(s) de R$50`)
    }
    if(valor >= 10) {
        n10 = 0
        while(valor >= 10) {
            valor -= 10
            n10++
        }
        console.log(`${n10} nota(s) de R$10`)
    }
    if(valor >= 5) {
        n5 = 0
        while(valor >= 5) {
            valor -= 5
            n5++
        }
        console.log(`${n5} nota(s) de R$5`)
    }
    if(valor >= 1) {
        n1 = 0
        while(valor >= 1) {
            valor -= 1
            n1++
        }
        console.log(`${n1} nota(s) de R$1`)
    }
}

notas(166)