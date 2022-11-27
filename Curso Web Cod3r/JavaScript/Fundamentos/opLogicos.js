function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarXbox = trabalho1 && trabalho2
    // const comprarPlaystation = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarPlaystation = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // unario

    return { comprarSorvete, comprarXbox, comprarPlaystation, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))