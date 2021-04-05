
// O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as 
// medidas formam um triângulo válido.

const ler = require("prompt-sync")();

var a = ler("Digite o primeiro lado ?");
var b = ler("Digite o segundo lado ?");
var c = ler("Digite o terceiro lado ?");

var validacao = a <= b+c || b <= a+c || c <= a+b;

console.log("Esse triângulo é válido ?", validacao);
