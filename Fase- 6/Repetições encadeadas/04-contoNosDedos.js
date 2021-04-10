// No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem 
// na tela em sequência. Ela vai experimentar vários números, até que digite um zero para parar de contar.

const ler = require("prompt-sync")();

var valor = Number(ler("Digite um valor que deseja contar ?"));
console.log("++++++++++++++++++++++++++++++++++++")

do {    
    for (let index = 0; index < valor; index++) {
        console.log("Numero ->",index)
    }
    valor = Number(ler("Digite um outro valor ou 0 Para Sair do Programa ?"));
} while (valor !== 0);