function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Ola', 123) 
const aula2 = new Aula('Sim', 234)

function novo(f, ...params) { // ...params coleta todos os parametros e guarda no array params
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Ola', 123)
const aula4 = novo(Aula, 'Sim', 234)

console.log(aula1)
console.log(aula2)
console.log(aula3)
console.log(aula4)