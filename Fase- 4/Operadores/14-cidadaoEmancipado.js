// É considerado “Emancipado” qualquer pessoa a partir de 21 anos, ou o indivíduo do sexo masculino 
// a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão segundo o ano do seu 
// nascimento.

const ler = require("prompt-sync")();

var verificarSexo = ler("Qual o seu sexo ? ");
var verificarAnoNascimento = ler("Qual o seu ano de nascimento ? ");
const anoAtual = 2021;
var idade = anoAtual - verificarAnoNascimento ;

var emancipado = idade >= 21 && verificarSexo === "Feminino" || idade >= 18 && verificarSexo === "Masculino";

console.log("Sexo:", verificarSexo);
console.log("Ano de nascimento:", verificarAnoNascimento);
console.log("Cidadão Emancipado ?", emancipado);