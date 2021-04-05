// Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), 
// cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos 
// resultados na tela.

const ler = require("prompt-sync")();

var player1 = ler("Player 1 digite um numero ?");
var player2 = ler("Player 2 digite um numero ?");

var resultadoPlayer1 = player1 > player2;
var resultadoPlayer2 = player2 > player1;
var empate = player1 == player2;

console.log("== Maioral ==");
console.log("Player 1:", player1);
console.log("Player 2:", player2);
console.log(": Resultados :");
console.log("Player 1 venceu ?", resultadoPlayer1);
console.log("Player 2 venceu ?", resultadoPlayer2);
console.log("Houve empate ? ", empate);



