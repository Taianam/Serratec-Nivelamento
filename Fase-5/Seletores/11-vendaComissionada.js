// Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta 
// de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor 
// total de vendas e emitir o recibo de comissão.

const ler = require("prompt-sync")();

var vendas= parseFloat(ler("Valor total de vendas:"));
 
const META= 5000.00;
var comicaoPorVenda = vendas * 0.05;
var  adicional=0.0;

if (vendas > META){
    adicional = (vendas - META ) * 0.09;

}

console.log ("Sua comisão: ",comicaoPorVenda.toFixed(2));
console.log ("Valor adicional: ", adicional.toFixed(2));

