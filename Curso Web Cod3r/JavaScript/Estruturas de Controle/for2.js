const notas = [6.4 ,3.3 , 7.34, 3.4 ,8.6]

for(let i in notas) {
    console.log(i, notas[i])
}

const jogadorNBA = {
    nome: 'Michael Jordan',
    idade: '59',
    peso: '90kg',
    altura: 1.98,
    titulo: 'The Goat'
}

for(let atributo in jogadorNBA) { // legal deixar let para atributo nao poder ser acessado posteriormente fora da funcao
    console.log(`${atributo} = ${jogadorNBA[atributo]}`)
}