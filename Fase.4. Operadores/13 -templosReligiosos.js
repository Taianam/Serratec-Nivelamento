
// Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. 
// Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

const ler = require("prompt-sync")();

var verificarMascara = ler("Está usando máscara ?");
var verificarTemperatura = ler("Qual a temperatura ? ");

var autorizacao = verificarMascara === "sim" && verificarTemperatura <= 37.5;

console.log("Usa máscara:", verificarMascara);
console.log("Temperatura:", verificarTemperatura + "º");
console.log("Autorizado a entrada ?", autorizacao);
