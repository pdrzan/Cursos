function Pessoa () {
    this.idade = 0
    setInterval( () => {
        this.idade++
        console.log(this.idade) // o this não muda porque a função arrow garante que o this é sempre o do contexto que foi criado
    }, 1000)
}

new Pessoa