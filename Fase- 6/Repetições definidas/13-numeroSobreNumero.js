// Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência 
// decrescente entre número até 1, e a soma de todos os valores da sequência.

const ler = require("prompt-sync")();

var valor = Number(ler("Digite um valor inteiro ?"));
var somaTotal = 0;

for (let index = valor; index >= 1; index--) {
   
    somaTotal = somaTotal + index;

    console.log(">>>> ",index);
}

console.log("A soma de todos os valores da sequência", somaTotal);