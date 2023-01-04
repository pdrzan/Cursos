const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 23

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    fun1: function (){
        //...
    },
    fun2() {
        //...
    }
}

console.log(obj5)