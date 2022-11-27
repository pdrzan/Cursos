const passou = function(nota) {
    if(nota >= 7) {
        console.log("Passou")
    } else {
        console.log("Reprovou")
    }
}

passou(8)
passou(4)
passou("Sim, passei uma string")
passou(null)
passou(NaN)
passou(undefined)
passou('')
passou("10")