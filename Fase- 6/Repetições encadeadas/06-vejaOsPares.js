// No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 
// 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever 
// a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência 
// (entre 12 e 20 etc).

const ler = require("prompt-sync")();

var maximo = 3;
var controle = 2;
var condicao = "";

do {

    for (controle; controle < maximo; controle = controle + 10) {
        console.log( controle,"," ,controle + 2,"," ,controle + 4,"," ,controle + 6,"," ,controle + 8,".");
    }

    maximo = maximo + 10;
    condicao = ler("Deseja continuar ?");

} while (condicao == "sim");