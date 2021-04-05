/*16. O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas
por um funcionário em um mês, o valor que ele recebe por hora e o percentual de 
desconto para o INSS, e calcula:
a. O salário bruto (horas trabalhadas * valor hora)
b. O valor do desconto para o INSS
c. O salário líquido (adicionais menos descontos).
d. Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das
informações com formatação: Salário bruto, valor do desconto do INSS, e o
salário líquido do funcionário.*/

const ler = require("prompt-sync")();

var horas = parseFloat(ler("Digite o quantidade de horas trabalhada=")) ;
var valorHoraTrabalhada = parseFloat(ler("Digite o valor hora=")) ;
var percentualInss = parseFloat(ler("Digite o percentual do inss=")) 

var salarioBruto = valorHoraTrabalhada * horas;
var valorDescontoInss = (salarioBruto * percentualInss) / 100;
var salarioLiquido =  salarioBruto - valorDescontoInss;

console.log("Salário bruto R$",salarioBruto.toFixed(2));
console.log("Valor do desconto inss R$",valorDescontoInss.toFixed(2));
console.log("Salário liquido R$",salarioLiquido.toFixed(2));


