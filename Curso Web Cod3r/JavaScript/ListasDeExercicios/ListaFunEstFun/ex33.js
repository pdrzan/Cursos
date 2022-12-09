function concat1(vetorInteiro, vetorString, vetorDouble) {
    return vetorDouble.concat(vetorString).concat(vetorInteiro)
}

function concat2(vetorInteiro, vetorString, vetorDouble) {
    return vetorDouble.concat(vetorInteiro).concat(vetorString)
}

console.log(concat1([1,2,3,4,5],['aaa','bbb','ccc'],[1.1,2.2,3.3]))
console.log(concat2([1,2,3,4,5],['aaa','bbb','ccc'],[1.1,2.2,3.3]))
