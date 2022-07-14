let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar ...");
console.log(!!("" || null || 0 || "teste"));

<<<<<<< HEAD:booleanos.js
let nome = "Lucas";
console.log(nome || "nome desconhecido");
=======
console.log("Para finalizar ...")
console.log(!!("" || null || 0 || "teste"))

let nome = "Lucas"
console.log(nome || "nome desconhecido")
>>>>>>> b732d999f4f95a327befea8cd19a998a6692fbec:Fundamentos/booleanos.js
