/*O programa “Cara ou coroa” irá funcionar assim: O sistema irá solicitar um número,
 o jogador irá digitar o valor que preferir. O programa então irá exibir uma resposta
  em texto fixo, onde a única variável é o resultado da moeda. Para “jogar a moeda”,
   considere o número digitado: Sendo par é cara, sendo ímpar é coroa.*/


const ler = require("prompt-sync")();

var numero = ler ("Digite um número:");
var resultado = numero % 2;

console.log("Veja o resultado abaixo: sendo 0 é cara, 1 é coroa: ");
console.log("O sorteio deu", resultado+"!");
