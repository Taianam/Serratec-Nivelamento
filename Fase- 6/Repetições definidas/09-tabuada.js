// Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.

const ler = require("prompt-sync")();

var nome = ler("Digite seu nome ?");
console.log("==== Bem vindo a tabuada", nome, "====")

var valor = ler("Qual tabuada deseja ?");

for (let index = 1; index <= 10; index++) {
    var resultado = valor * index;
    console.log(valor, "x", index, "=", resultado);    
}