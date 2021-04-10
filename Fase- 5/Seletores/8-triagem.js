// A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a 
// infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. 
// Após as entradas, receberá a avaliação na tela.

const ler = require("prompt-sync")();

var nome = ler("Nome do paciente ?");
var menu = parseInt(ler("Já foi vacinado - Digite 1 \nNão foi vacinado - Digite 2\n "));

var caminhoFeliz = menu == 1;

console.log("Paciente:", nome);

if ( caminhoFeliz ) {
    console.log("Vacinado ? Ok");
    console.log("Sujeito a infecção ? ", !caminhoFeliz);
} else {
    console.log("Fique atento as datas de vacinação")
    console.log("Vacinado ? Não ");
    console.log("Sujeito a infecção ? ", !caminhoFeliz);
}
