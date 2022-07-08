const nome = "Rebeca";
const concatencao = "Ola " + nome + "!";
const template = `
    "Ola"
    ${nome}!`;
console.log(concatencao, template);

//expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
