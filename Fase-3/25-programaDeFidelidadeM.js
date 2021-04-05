
const ler = require("prompt-sync")();

console.log("Bem vindo ao programa de fidelidade onde a cada 1 cupom seu, corresponde a 3 ponto.");
var  cupom= ler ("Digite seus cupons: ");
var reultado = cupom * 3;


console.log("Seus cupons agora valem " + reultado + " pontos!");