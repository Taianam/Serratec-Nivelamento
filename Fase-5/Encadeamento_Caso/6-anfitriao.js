// O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais 
// quanto na quantidade de visitas.

const ler = require("prompt-sync")();

var nome = ler("Digite o nome do visitante ?")
console.log("----> BEM VINDO", nome, "<----");

var visitas = Number(ler("Digite a quantidade de visitas"));

if (visitas <= 0) {
    console.log("Você nunca nos visitou :c",nome);
} else if (visitas == 1) {
    console.log("Você já nos visitou uma vez :)",nome);
} else if (visitas == 2) {
    console.log("Você já nos visitou daus vez :D",nome);
} else {
    console.log("Você já nos visitou", visitas,"vezes",nome," |o/ uhuul");
}