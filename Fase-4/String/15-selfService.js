//O restaurante "Self-Service" precisa de um programa para imprimir 
//as etiquetas de "comanda" na pesagem dos pratos. O operador da balança 
//irá digitar o preço do quilo e o total em gramas da refeição, considerando 
//que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, 
//a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.

const ler = require("prompt-sync")();

var nomeResturante= "Restaurante Serratec Self-Sevice";
var tara= 465;
var precoPorGrama= 3.99;
var pesoPrato=  ler("Qual peso do prato em gramas?");
var taraMenos= pesoPrato-tara; 
var resultado= (taraMenos/ 100 )* precoPorGrama;

console.log(nomeResturante);
console.log("O peso do prato vazio é ", tara, " gramas");
console.log(" A cada 100 gramas será cobrando o valor R$", precoPorGrama);
console.log("O valor consumido foi ", taraMenos);
console.log("Total=", resultado.toFixed(2));