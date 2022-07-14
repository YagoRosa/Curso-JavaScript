const funcs = []

for (var i = 0; i <10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// variavel sem escopo de funcao entao imprimira o valor de 10 para todas as situações
