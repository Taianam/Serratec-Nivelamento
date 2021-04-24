//Doar sangue é muito importante. Porém, nem todos podem fazê-lo. 
//Não podem ser doadores os menores, nem portadores de doenças do fígado, 
//tampouco quem já doou nos últimos 3 meses. Ajude o “Banco de sangue” 
//a fazer a triagem dos voluntários que responderam ‘sim’ para as restrições.

const ler = require("prompt-sync")();

console.log("====BANCO DE SANGUE====");
console.log("Digite 'sim' ou 'não' nas restrições a seguir");

var idade= ler("Você está abaixo de 16 ou acima de 69 anos: ");
var peso=ler("Pesa menos de 50kg:");
var hepatite= ler("Portador de Hepatite:");
var malaria=ler("Já teve Malária: ");
var recente=ler("fez doação recente: ");


var resultado = !(
idade == "sim" ||
peso == "sim" ||
hepatite == "sim" ||
malaria == "sim" ||
recente == "sim"
);


console.log("==RESULTADO DA TRIAGEM==");
console.log("Pode doar sangue?", resultado);

var porque= ""

if (idade == "sim") porque = "Abaixo ou acima da idade";
if (peso== "sim") porque += ", infelizmente está abaixo do peso";
if (hepatite == "sim") porque += ", infelizmente você já teve Hepatite";
if ( malaria == "sim") porque += ", infelizmente você já teve Malaria";
if ( recente == "sim") porque += ", Você fez uma doação recente";


console.log("Motivo: ", porque);