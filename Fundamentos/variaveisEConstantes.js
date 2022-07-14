var a = 3;
let b = 5;

console.log(a, b);

var a = 30;
//let b = 40  ocorrea um erro se for definido assim por ja ter sido definido um Let no incio do codigo
b = 40; // dessa forma nao havera

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
// c = 50 não e possivel redefinir uma constante
console.log(c);
