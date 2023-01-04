function imparesEntre(menor, maior) {
    if(menor > maior) {
        aux = menor
        menor = maior
        maior = aux
    }
    for(; menor < maior && menor % 2 != 1;menor++);
    for(;menor < maior; menor += 2) {
        console.log(menor)
    }
}

imparesEntre(10,20)
imparesEntre(1,20)