
const ler = require("prompt-sync")();

var  garrafa = ler ("Quantos ml tem sua garrafa?");
var alcool = (garrafa* 70)/100;
var resultado = garrafa - alcool;

console.log("Sua garrafa possui ", garrafa+ " ml então terá " + resultado + " ml de álcool em gel.");
