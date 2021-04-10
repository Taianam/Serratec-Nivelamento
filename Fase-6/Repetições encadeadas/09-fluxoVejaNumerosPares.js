//O programa “Veja os números pares” agora utiliza condições de fluxo e parada.

const ler = require("prompt-sync")();

var maximo = 3;
var controle = 2;
var condicao = "";

    for (controle; controle < maximo; controle = controle + 10) {
        console.log( controle,"," ,controle + 2,"," ,controle + 4,"," ,controle + 6,"," ,controle + 8,".");

        condicao = ler("Deseja continuar ?");

        if(condicao == "sim"){
            maximo = maximo + 10;
            continue;
        }else{
            return;
        }
    }

   
    

