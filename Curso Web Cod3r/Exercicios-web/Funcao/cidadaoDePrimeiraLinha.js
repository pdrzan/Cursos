// Função em JS é First-Class Object
// Higher-order function

// criar de forma literal
function fun1() { return 'UEPA'}
// Armazenar em uma variável
const fun2 = function () { return 'CAVALO'}
// Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))
// Armazenar em atributo de objeto
const obj = {}
obj.boner = function () {return 'Boa Noite'}
console.log(obj.boner())
// Passar função como parâmetro
function run(fun) {
    fun()
}
run(function run(fun) {console.log("Agr estou sendo executado")} )
// Retornar uma função
function multi(a,b) {
    return function (c) {
        console.log(a * b - c)
    }
}
multi(3,2)(4)
const nao = multi(3,2)
nao(4)
