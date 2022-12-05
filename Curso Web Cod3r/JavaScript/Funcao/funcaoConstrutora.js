function Carro (velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velcidadeAtual = 0

    // metodo privado
    this.acelerar = function () {
        if(velcidadeAtual + delta <= velocidadeMaxima){
            velcidadeAtual += delta
        } else {
            velcidadeAtual = velocidadeMaxima
        }
    }

    // metodo privado
    this.getVelocidadeAtual = function () {
        return velcidadeAtual
    }
}

uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())