class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Pedro')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // aq não tem problemas com o this, mais determinístico a função
    }
}

const p2 = criarPessoa('Ana')
p2.falar()