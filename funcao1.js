// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // retornara NaN
imprimirSoma(2,10,4,5,6,7,8)

//funcao com retorno
function soma (a, b = 1){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // retornara NaN
