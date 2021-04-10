// Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, 
// que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
// Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

const ler = require("prompt-sync")();

var primeiraProva = parseFloat(ler("Digite a nota da primeira prova ?"));
var segundaProva = parseFloat(ler("Digite a nota da segunda prova ?"));

var resultado = primeiraProva + segundaProva;

if  (resultado >= 0 && resultado < 4) {
    console.log("Reprovado :/\n","Total",resultado);
} else if (resultado >= 4 && resultado < 6) {
    console.log("Recuperação :v\n","Total",resultado);
} else if (resultado >= 6 && resultado < 8) {
    console.log("Aprovado :)\n","Total",resultado);
} else if (resultado >= 8 && resultado <= 10) {
    console.log("Destaque :D\n","Total",resultado);
} else {
    console.log("Erro, verifique sua nota e tente novamente !!")
}