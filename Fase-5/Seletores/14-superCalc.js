// A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois 
// realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo 
// número.

const ler = require("prompt-sync")();

var  numero1= parseFloat(ler("Qual o primeiro número: "));
var operador= ler(" Qual o operadore: ex: +, -,x,/ ?");
var numero2 = parseFloat(ler("Qual o segundo número: "));


var soma = operador == "+";
var subtracao = operador == "-";
var multiplicacao = operador.toLowerCase() == "x";
var divisao = operador == "/"
var resultado;

if (soma){
    resultado = numero1+numero2;
    console.log("Seu resuldado é :", resultado);
} else if(subtracao){
    resultado=numero1-numero2;
    console.log("Seu resuldado é :", resultado );
} else if ( multiplicacao){
    resultado=numero1*numero2;
    console.log("Seu resuldado é :", resultado);

} else if (divisao){
    resultado=numero1/numero2;
    console.log("Seu resuldado é :", resultado);
} else { console.log("Não entendi o que você quis fazer");
}

