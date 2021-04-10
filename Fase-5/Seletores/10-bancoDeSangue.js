const ler = require("prompt-sync")();

console.log("====BANCO DE SANGUE====");
console.log("Digite 'sim' ou 'não' nas restrições a seguir");

var idade = ler("Você está abaixo de 16 ou acima de 69 anos: ");

if (idade == "nao") {
    var peso = ler("Pesa menos de 50kg:");
} 

if (peso == "nao") {
    var hepatite = ler("Portador de Hepatite:");
} 

if (hepatite == "nao") {
    var malaria = ler("Já teve Malária: ");
}

 if (malaria == "nao") {
    var recente = ler("Fez doação recente: ");
}
if (recente == "nao") {
    console.log("==RESULTADO DA TRIAGEM==");
    console.log("Parabéns, Você pode ser um doador de Sangue!");
} else {
    console.log("==RESULTADO DA TRIAGEM==\n Infelizmente você não pode doar!");
}



if (idade == "sim") console.log( "Abaixo ou acima da idade");
if (peso == "sim") console.log ("Infelizmente está abaixo do peso");
if (hepatite == "sim") console.log("Infelizmente você já teve Hepatite");
if (malaria == "sim") console.log ("Infelizmente você já teve Malaria");
if (recente == "sim") console.log ("Você fez uma doação recente");