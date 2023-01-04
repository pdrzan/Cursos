function estaEntre(min, max, num, inclusivo = false) {
    if(inclusivo) {
        return min <= num && max >= num
    } else {
        return min < num && max > num
    }
}
console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))