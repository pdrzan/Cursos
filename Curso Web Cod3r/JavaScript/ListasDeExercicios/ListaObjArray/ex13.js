function filtrarNumeros(array) {
    return array.filter(param => typeof param === 'number')
}

console.log(filtrarNumeros(['Java', 2, 10, 'Sim', true, -10, 20]))
console.log(filtrarNumeros(['Java','Sim', true]))