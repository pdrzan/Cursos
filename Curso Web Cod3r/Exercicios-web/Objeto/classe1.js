class Lancamento {
    constructor(nome = 'Nome Padrão', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => {
            this.lancamentos.push(l)
        })
    }
    suamrio() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { valorConsolidado += l.valor })
        return valorConsolidado 
    }
}

const salario = new Lancamento('Salário', 30000)
const contaLuz = new Lancamento('Luz', -600)

const outubro = new CicloFinanceiro('Outubro', 2022) 
outubro.addLancamentos(salario, contaLuz)
console.log(outubro.suamrio())