// Cadeia de protótipos (prototype chain)
Object.prototype.d = 3 // Não faça isso em casa!
const avo = { a: 0 }
const pai = { __proto__: avo, b: 1 }
const filho = { __proto__: pai, c: 2 } 
console.log(filho.a, filho.b, filho.c, filho.d)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 300 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(299)
console.log(ferrari.status())