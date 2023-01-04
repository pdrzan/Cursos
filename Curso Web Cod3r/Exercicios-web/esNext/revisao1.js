// let e const
{
    var a = 'a'
    let b = 'b'
    console.log(b) // só funciona dentro das chaves pois let tem escopo de bloco
}
console.log(a)

// Template String
const produto = 'Notebook'
console.log(`Esse ${produto} é bom
mesmo`)

// Destructuring
const [l, e, ...tras] = "Exato"
console.log(l, e, tras)

const [d, , c] = [1, 2, 3, 4, 5]
console.log(d, c)

const { idade: i, nome} = { nome: 'Joao', idade: 9}
console.log(i, nome)

