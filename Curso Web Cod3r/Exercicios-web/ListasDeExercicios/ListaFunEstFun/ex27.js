function crescimentoCriancas(alt1, taxaCres1, alt2, taxaCres2) {
    if(alt1 > alt2) {
        if(taxaCres2 > taxaCres1) {
            qtdAno = 0
            while(alt1 > alt2) {
                qtdAno++
                alt1 = alt1 * (taxaCres1 + 1)
                alt2 = alt2 * (taxaCres2 + 1)
            }
            console.log(`A segunda criança ultrapassará a primeira em ${qtdAno} anos`)
        }
        else {
            console.log('A primeira criança é a maior e a segunda nunca ultrapassará a primeira')
        }
    } else if(alt2 > alt1) {
        if(taxaCres1 > taxaCres2) {
            qtdAno = 0
            while(alt2 > alt1) {
                qtdAno++
                alt1 = alt1 * (taxaCres1 + 1)
                alt2 = alt2 * (taxaCres2 + 1)
            }
            console.log(`A primeira criança ultrapassará a segunda em ${qtdAno} anos`)
        }
        else {
            console.log('A segunda criança é a maior e a primeira nunca ultrapassará segunda')
        }
    } else {
        console.log("As duas crianças tem a mesma altura")
    }
}

crescimentoCriancas(1.0, 0.08, 1.2, 0.07)
crescimentoCriancas(1.0, 0.08, 1.2, 0.08)
crescimentoCriancas(1.5, 0.08, 1.2, 0.07)
crescimentoCriancas(1.5, 0.08, 1.5, 0.07)
crescimentoCriancas(1.5, 0.08, 1.2, 0.1)
crescimentoCriancas(1.5, 0.08, 1.6, 0.07)