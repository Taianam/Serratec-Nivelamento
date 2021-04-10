// A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será 
// utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e 
// de igual modo, o dia ímpar é destinado aos documentos ímpares.

const ler = require("prompt-sync")();

var dia = ler("Qual dia deseja sair ?");
var ultimoDigitoCPF = ler("Ultimo digito do cpf ?");

var verificarDia = dia % 2 === 0;
var verificarDigitoCPF = ultimoDigitoCPF % 2 === 0;

var resultado = verificarDia == verificarDigitoCPF;

console.log("Posso sair dia",dia,"?", resultado);