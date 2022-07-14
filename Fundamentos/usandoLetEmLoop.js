const funcs = []

for (let i = 0; i <10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// let guardara o valor de 'i' entao retornara o valor definido no [ ] de funcs
