// Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, 
// aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, 
// feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em 
// papel na sexta, após a previsão do tempo, e colar na porta da geladeira.

const ler = require("prompt-sync")();

var previsao = 
    parseInt(ler("Digite a previsão tempo do fim semana ?\nDigite 1 - Sol \nDigite 2 - Nublado \nDigite 3 - Chuva\n" ));

if (previsao == 1) {
    console.log("Ir para praia");
    console.log("Levar um lanche para almoçar na praia");
} else {
    console.log("Ir estudar");
    console.log("Comer feijoada em casa");
    console.log("Assistir televisão");
    console.log("Tira um cochilo");
}