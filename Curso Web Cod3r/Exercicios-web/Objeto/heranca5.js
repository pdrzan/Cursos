console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
} 

console.log('Pedro'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 3, 51, 2].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Pedro'.reverse())