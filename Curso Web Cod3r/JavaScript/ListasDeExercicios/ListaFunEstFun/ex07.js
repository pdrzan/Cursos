function bhaskara(a, b, c) {
    delta = (b**2) - (4 * a * c)
    console.log(delta)
    if(delta >= 0) {
        vetor = []
        vetor.push((-b + (delta**(0.5)))/ 2 * a)
        vetor.push((-b - (delta**(0.5)))/ 2 * a)
        return vetor
    } else {
        return "Delta é negativo"
    }
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, 4, 4))