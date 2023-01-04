function tipoTriangulo(x, y, z) {
    if(x == y && z == y) {
        return "Equilátero"
    } else if (x == y || x == z || y == z) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(tipoTriangulo(3, 3, 3))
console.log(tipoTriangulo(4, 3, 4))
console.log(tipoTriangulo(4, 3, 2))