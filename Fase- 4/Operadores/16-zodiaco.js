//O astrólogo que escreveu o sistema “Zodíaco” 
//acredita que os nascidos sob o signo de Aquário 
//são mais inteligentes que os demais.

const ler = require("prompt-sync")();

var mesDeNascimento =ler("Mês do seu nascimento:");
var diaDoNascimento = ler("Dia do aniversário:");

var  validacao1= mesDeNascimento==1 && diaDoNascimento>=21;
var validacao2 = mesDeNascimento==2 && diaDoNascimento<=19;

var juncao = validacao1 || validacao2;

console.log("Você é inteligente?", juncao, "!");
