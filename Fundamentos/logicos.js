function compras(trabalho01, trabalho02) {
  const comprarSorvete = trabalho01 || trabalho02;
  const comprarTv50 = trabalho01 && trabalho02;
  //const comprarTv32 = !!(trabalho01 ^ trabalho02) // bitwise xor
  const comprarTv32 = trabalho01 != trabalho02;
  const manterSaudavel = !comprarSorvete; // operador unario

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}
console.log("V e V ");
console.log(compras(true, true));

console.log("V e F ");
console.log(compras(true, false));

console.log("F e V ");
console.log(compras(false, true));

console.log("F e F ");
console.log(compras(false, false));
