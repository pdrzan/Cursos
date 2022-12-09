function progressaoAritmetica(n, a1, r) {
    total = 0
    for(let i = 0; i < n; i++) {
        total += a1
        console.log("Elemento ",i, ":", a1)
        a1+= r
    }
    return `Total: ${total}`
}

function progressaoGeometrica(n, a1, r) {
    total = 1
    for(let i = 0; i < n; i++) {
        total += a1
        console.log("Elemento ",i, ":", a1)
        a1*= r
    }
    return `Total: ${total}`
}

console.log(progressaoAritmetica(1, 2, 2))
console.log(progressaoGeometrica(1, 2, 2))
console.log(progressaoAritmetica(4, 2, 2))
console.log(progressaoGeometrica(4, 2, 2))
console.log(progressaoAritmetica(6, 5, 5))
console.log(progressaoGeometrica(6, 5, 5))