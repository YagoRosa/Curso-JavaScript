<<<<<<< HEAD:array.js
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);
=======
16 lines (12 sloc)  326 Bytes

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
>>>>>>> b732d999f4f95a327befea8cd19a998a6692fbec:Fundamentos/array.js

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ ìd: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

<<<<<<< HEAD:array.js
console.log(typeof valores);
=======
console.log(typeof valores)
>>>>>>> b732d999f4f95a327befea8cd19a998a6692fbec:Fundamentos/array.js
