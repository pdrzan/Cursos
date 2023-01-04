const ferrari = {
    modelo: 'F40',
    velMax: 300
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // undefined porque ferrari é um objeto e não uma função
console.log(ferrari.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
