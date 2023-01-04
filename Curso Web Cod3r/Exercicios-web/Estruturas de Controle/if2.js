function passou(media) {
    if(media >= 7) 
        console.log("Passou ")
        console.log("Sou executado de qualquer independente do if")
}

passou(3)
passou(8)

function passouMesmo(faltas) {
    if(faltas <= 10); {
        console.log("Sim, passou") // essa linha é executada independente do numero de faltas por causa do ;
    }
}

passouMesmo(11)
passouMesmo(3)