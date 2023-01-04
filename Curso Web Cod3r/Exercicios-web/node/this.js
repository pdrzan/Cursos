console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function funcaoMassa() { // aponta para global
    console.log('Dentro da função')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
}

funcaoMassa()

const arrowFunction = () => { // aponta para module.exports
    console.log('Dentro da função arrow')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
}

arrowFunction()