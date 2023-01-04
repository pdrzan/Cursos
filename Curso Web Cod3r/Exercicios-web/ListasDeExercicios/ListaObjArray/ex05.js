function maiorIgual (n1, n2) {
    if(typeof n1 != typeof n2) {
        return false
    }
    return n1 >= n2
}
console.log(maiorIgual(0, 0))
console.log(maiorIgual(0, "0"))
console.log(maiorIgual(5, 1))