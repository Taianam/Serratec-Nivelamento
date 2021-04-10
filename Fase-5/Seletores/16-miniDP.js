// O “mini DP” aumentou seus cálculos. Agora, considere a jornada de trabalho semanal de um funcionário, 
// que é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o
// valor da hora regular com um acréscimo de 50%. Considerando que o mês possui 4 semanas exatas, e que
// a entrada de horas será um valor maior que a jornada normal.
// Salário base (valor da hora * horas normais)
// Valor de horas extras
// Valor do desconto para o INSS
// Salário líquido (Salário base + horas extras – desconto INSS)
// Imprimir na tela o contracheque do funcionário.

const ler = require("prompt-sync")();

var nome = ler(" Olá, digite o nome do funcionário!")
var valorDaHora = parseFloat(ler("Digite o valor/hora:"));
var quantidadeDeHorasTrabalhada = parseFloat(ler(" Quantas horas " + nome + " trabalhou no mês"));
var salarioBase = valorDaHora * quantidadeDeHorasTrabalhada;
var valorTotalDaHoraExtra = 0
var valorDeDescontoInss = 0
var mensagem;
var valorDoSalarioBaseComHoraExtra = valorTotalDaHoraExtra + salarioBase;



if (quantidadeDeHorasTrabalhada > 160) {
    let valorDaHoraExtra = valorDaHora * 0.5
    valorTotalDaHoraExtra = (quantidadeDeHorasTrabalhada - 160) * valorDaHoraExtra;

    if (valorDoSalarioBaseComHoraExtra <= 1100) {
        valorDeDescontoInss = valorDoSalarioBaseComHoraExtra * 0.075;
        mensagem = "Com base no salario sará descontado 7,5% do INSS: ";

    } else if ((valorDoSalarioBaseComHoraExtra >= 1100.01) && (valorDoSalarioBaseComHoraExtra <= 2203.45)) {
        valorDeDescontoInss = valorDoSalarioBaseComHoraExtra * 0.09;
        mensagem = "Com base no salario sará descontado 9% do INSS:";

    } else if ((valorDoSalarioBaseComHoraExtra >= 2203.49) && (valorDoSalarioBaseComHoraExtra <= 3305.22)) {
        valorDeDescontoInss = valorDoSalarioBaseComHoraExtra * 0.12;
        mensagem = "Com base no salario sará descontado 12% do INSS:"

    } else if ((valorDoSalarioBaseComHoraExtra >= 3305.23) && (valorDoSalarioBaseComHoraExtra <= 6433.57)) {
        valorDeDescontoInss = valorDoSalarioBaseComHoraExtra * 0.14;
        mensagem = "Com base no salario sará descontado 14% do INSS:"
    }
    var salarioLiquido = (salarioBase + valorTotalDaHoraExtra) - valorDeDescontoInss;

    console.log("=====Contracheque do funcionário " + nome + "=====");
    console.log("Salário base R$: ", salarioBase);
    console.log("Valor de horas extras", valorTotalDaHoraExtra);
    console.log(mensagem);
    console.log("Valor do desconto para o INSS: R$", valorDeDescontoInss);
    console.log("Salário líquido: R$", salarioLiquido);

}
else {

    if (salarioBase <= 1100) {
        valorDeDescontoInss = salarioBase * 0.075;
        mensagem = "Com base no salario sará descontado 7,5% do INSS: ";

    } else if ((salarioBase >= 1100.01) && (salarioBase <= 2203.45)) {
        valorDeDescontoInss = salarioBase * 0.09;
        mensagem = "Com base no salario sará descontado 9% do INSS:";

    } else if ((salarioBase >= 2203.49) && (salarioBase <= 3305.22)) {
        valorDeDescontoInss = salarioBase * 0.12;
        mensagem = "Com base no salario sará descontado 12% do INSS:"

    } else if ((salarioBase >= 3305.23) && (salarioBase <= 6433.57)) {
        valorDeDescontoInss = salarioBase * 0.14;
        mensagem = "Com base no salario sará descontado 14% do INSS:"
    }
    var salarioLiquido = (salarioBase + valorTotalDaHoraExtra) - valorDeDescontoInss;

    console.log("=====Contracheque do funcionário " + nome + "=====");
    console.log("Salário base R$: ", salarioBase);
    console.log(mensagem);
    console.log("Valor do desconto para o INSS: R$", valorDeDescontoInss);
    console.log("Salário líquido: R$", salarioLiquido);
}
