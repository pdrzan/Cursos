// notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções contrutoras
function Produto(nome, código, valor, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return valor * (1 - desconto)
    }
}

const p1 = new Produto('Xampoo', 123, 10, 0.1)
const p2 = new Produto('Cadeira', 100, 200, 0.13)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, cargo, salarioBase, faltas) {
    return {
        nome,
        cargo,
        salarioBase,
        calcularSalario() {
            return salarioBase * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Pedro', 'Desenvolvedor', 100, 2)
const f2 = criarFuncionario('Maria', 'Gerente', 140, 4)
console.log(f1.calcularSalario(), f2.calcularSalario())

// Object create
const filha = Object.create(null) 
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)