function inverter(objeto) {
     obj = {}
     Object.entries(objeto).forEach(function (ArrayObjeto) {
        obj[ArrayObjeto[1]] = ArrayObjeto[0]
     })
     return obj
}

console.log(inverter({ a: 1, b: 2, c: 3}))