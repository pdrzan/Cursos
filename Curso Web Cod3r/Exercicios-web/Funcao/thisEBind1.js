const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falaPessoa = pessoa.falar.bind(pessoa)  // bind faz com que o this sempre aponte para pessoa
falaPessoa()