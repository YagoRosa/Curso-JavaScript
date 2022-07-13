{
  {
    {
      var sera = "Sera??";
      console.log(sera);
    }
  }
}

console.log(sera); // consegue acessar a variavel mesmo estando fora do bloco

function teste() {
  var local = 123;
  console.log(local);
}
teste();
//console.log(local) // dara erro pois a variavel esta dentro de uma funcao
