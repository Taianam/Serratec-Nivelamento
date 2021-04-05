const ler = require("prompt-sync")();

console.log("====BANCO DE SANGUE====");
console.log("Digite 'sim' ou 'não' nas restrições a seguir");

var idade= ler("Você está abaixo de 16 ou acima de 69 anos: ");
var peso=ler("Pesa menos de 50kg:");
var hepatite= ler("Portador de Hepatite:");
var malaria=ler("Já teve Malária: ");
var recente=ler("fez doação recente: ");


var resultado =
idade == "sim" ||
peso == "sim" ||
hepatite == "sim" ||
malaria == "sim" ||
recente == "sim";

resultado = !resultado

console.log("==RESULTADO DA TRIAGEM==");
console.log("Pode doar sangue?", resultado);

var porque= ""

if (idade == "sim") porque = "Abaixo ou acima da idade";
if (peso== "sim") porque += ", Abaixo do peso";
if (hepatite == "sim") porque += ", Hepatite";
if ( malaria == "sim") porque += ", Malaria";
if ( recente == "sim") porque += ", Doação recente";


console.log("Motivo: ", porque)