/*O programa “Financeira” irá solicitar que o cliente digite seu nome, 
empresa e função, além do valor do empréstimo que deseja contratar.
Então será calculado 86% do valor desejado como crédito disponível.
A resposta ao cliente deve seguir o exemplo abaixo.
Para escrever as mensagens, utilize variáveis com concatenação de strings. 
O valor será escrito separadamente (no console.log).*/

const ler = require("prompt-sync")();



var  nome = ler ("Olá, qual seu nome? ");
var empresa= ler("Prazer em te conhecer " + nome + ", em qual empresa você trabalha?");
var funcao= ler("Que legal! E qual função você exerce na empresa, " + empresa +"?");
var emprestimo= parseFloat( ler("Tudo bem, agora informe o valor que pretente contratar:")) ;
var resultado = parseFloat((emprestimo * 0.86) + emprestimo);

console.log("Senhor(a)" + nome+ ", você está com sorte!");
console.log("Pela sua função de " +funcao+ " e sua excelente relação com a empresa "+empresa+",");
console.log("foi aprovado um crédito em sua conta corrente de R$"+ resultado.toFixed(2));


