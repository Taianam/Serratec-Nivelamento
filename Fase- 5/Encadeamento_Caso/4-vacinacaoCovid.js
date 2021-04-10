// O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a 
// idade, para então exibir as mensagens de direcionamento: acima de 67 anos = Por quê não vacinou ainda?
// Abaixo de 67 anos = Volte na próxima semana 67 anos completos = Vacinação hoje.

const ler = require("prompt-sync")();

var nome = ler("Digite o nome do paciente ?")
console.log("====== BEM VINDO", nome, "=====");

var idade = ler("Digite a idade do paciente ?");

if (idade > 67) {
    console.log("Por quê não vacinou ainda", nome, "?");
} else if (idade < 67) {
    console.log("Volte na próxima semana", nome);
} else {
    console.log("Vacinação hoje.", nome);
}