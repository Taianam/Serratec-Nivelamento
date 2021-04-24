// No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor 
// e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha 
// o carteador quando a soma ultrapassa esse valor.

const ler = require("prompt-sync")();

var player1 = ler("Digite o nome do player 1 ?");
var player2 = ler("Digite o nome do player 2 ?");
var jogador = "";
var somaDasCartas = 0;

do {

    if (jogador == player1) {
        jogador = player2
    } else {
        jogador = player1
    }

    var valorDigitado = parseInt(ler("Digite o valor da carta ?"));
    somaDasCartas = somaDasCartas + valorDigitado;
  
} while (somaDasCartas < 21);

if (somaDasCartas > 21){
    console.log(":( O carteiro venceu, o valor utrapassou", somaDasCartas);
} else {
    console.log("Parabéns o jogador", jogador, "venceu. Total", somaDasCartas )
}