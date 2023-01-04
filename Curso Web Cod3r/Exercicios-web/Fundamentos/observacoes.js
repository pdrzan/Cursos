let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(this.d)
console.log(this.e)
console.log(module.exports.c)
console.log(module.exports === this) // module.exports equivale à this
console.log(module.exports)

// criando um variavel maluca: sem var e let
abc = 3 // nao faca isso em casa
console.log(global.abc) // coloca em global

// module.exports = { e: 456, f: false, g: 'teste'}
