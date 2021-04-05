//Doar sangue é muito importante. Porém, nem todos podem fazê-lo. 
//Não podem ser doadores os menores, nem portadores de doenças do fígado, 
//tampouco quem já doou nos últimos 3 meses. Ajude o “Banco de sangue” 
//a fazer a triagem dos voluntários que responderam ‘sim’ para as restrições.

const ler = require("prompt-sync")();

const anoAtual = 2021;
var anoNascimento = ler("Em que ano você nasceu ?");
var temDoençaFigado = ler("Você já teve doença de fígado ?");
var ultimaDoacaoSuperiorTresMeses = ler("Caso, já tenha doado sangue, faz mais de 3 meses ?");

var idade = anoAtual - anoNascimento;

var resultado = idade >= 18 && temDoençaFigado === "nao" && ultimaDoacaoSuperiorTresMeses === "sim";

console.log("Pode doar sangue ?" , resultado);