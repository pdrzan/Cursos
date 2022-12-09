function duasString(string1, string2) {
    for(x in string1) {
        if(string2.indexOf(string1[x]) == -1 && string2.indexOf(string1[x].toUpperCase()) == -1 && string2.indexOf(string1[x].toLowerCase())) {
            return false
        }
    }
    for(y in string2) {
        if(string1.indexOf(string2[y]) == -1 && string1.indexOf(string2[y].toUpperCase()) == -1 && string1.indexOf(string2[y].toLowerCase())) {
            return false
        }
    }
    return true
}
console.log(duasString('ABC', 'ABCd'))
console.log(duasString('ABC', 'ABC'))
console.log(duasString('ABCd', 'ABCdd'))
console.log(duasString('AB', 'ABc'))
console.log(duasString('ABCed', 'ABCde'))