let valor; // nao inicializada
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);
// console.log(valor.toString()) // erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

<<<<<<< HEAD:nullUndefined.js
produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
=======
produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
>>>>>>> b732d999f4f95a327befea8cd19a998a6692fbec:Fundamentos/nullUndefined.js
