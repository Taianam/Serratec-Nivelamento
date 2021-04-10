// Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta 
// até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).

const ler = require("prompt-sync")();

var nome = ler("Digite seu nome ?");
console.log("==== Bem vindo", nome, "====")

var numeroMaximo = Number(ler("Digite o numero maximo que deseja contar ?"));
var vizualizar = ler("Digite PAR ou IMPAR para vizualizar somente uma dessas opções ?")
var contador = 0;

while (contador < numeroMaximo) {

    contador++;

    if (vizualizar.toLowerCase() == "par") {
        if (contador % 2 == 0) {
            console.log("NUMERO PAR =>>", contador);
        }
    } else if (vizualizar.toLowerCase() == "impar"){
        if (contador % 2 !== 0) {
            console.log("NUMERO IMPAR =>>", contador);
        }
    } else {
        console.log("NUMERO =>>", contador);
    }
}