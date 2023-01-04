function contarCaractere(caractere, string) {
    return string.split('').reduce(function (atual, letra) {
        if(letra === caractere) {
            return atual + 1
        } else {
            return atual
        }
    }, 0)
}
console.log(contarCaractere('C', 'Caraca muleque que dia que isso'))
console.log(contarCaractere('e', 'Caraca muleque que dia que isso'))