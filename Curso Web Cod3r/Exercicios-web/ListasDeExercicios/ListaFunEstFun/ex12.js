function fatorial(x) {
    if(x == 0 || x == 1) {
        return 1
    }
    return x * fatorial(x-1)
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(10))
console.log(fatorial(15))