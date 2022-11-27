const nums = [ 1,2,3,4,5,6,7,8,9,10]

for(x in nums) {
    if (x == 5) {
        break // break age no bloco mais próximo de for, while, switch
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log("-=-=-=-=-=-=-=-=-=-")

for (y in nums) {
    if (y == 5){
        continue // interrompe a repetição atual e pula pra próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log("-=-=-=-=-=-=-=-=-=-")

externo : for (a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo // age no laço mais externo pq especifíca o break
        console.log(`Par = ${a},${b}`)
    }
}

console.log("-=-=-=-=-=-=-=-=-=-")

externo : for (a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break // aq ele interrompe o for mais próximo
        console.log(`Par = ${a},${b}`)
    }
}