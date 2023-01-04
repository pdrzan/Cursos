function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Joao'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()
obj1.nome = 'Maria'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar()
obj3.nome = 'Lucia'
obj3.falar()

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)