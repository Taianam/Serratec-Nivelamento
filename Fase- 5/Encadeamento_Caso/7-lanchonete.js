// No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum 
// item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha.

const ler = require("prompt-sync")();

var nome = ler("Nome do cliente ?")
console.log("++++ Bem vindo a lanchonete", nome, "++++");
console.log("Escolha seu pedido", nome);
console.log("=============================================");

var verificarClienteComplemento = Number(ler("Deseja adicionar complemento\n Digite 1 - Sim\n Digite 2 - Não\n"));

if (verificarClienteComplemento == 1) {

    console.log("== Primeiro complemento ==");
    var primeiroComplemento = ler("Q=queijo, B=bacon, A=alface, T=tomate, P=picles\n");

    console.log("== Segundo complemento ==");
    var segundoComplemento = ler("Q=queijo, B=bacon, A=alface, T=tomate, P=picles\n");

    if (primeiroComplemento == "Q") {
        primeiroComplemento = "Queijo";
    } else if (primeiroComplemento == "B"){
        primeiroComplemento = "Bacon";
    } else if (primeiroComplemento == "A"){
        primeiroComplemento = "Alface";
    } else if (primeiroComplemento == "T") {
        primeiroComplemento = "Tomate";
    } else if (primeiroComplemento == "P"){
        primeiroComplemento = "Picles";
    }

    if (segundoComplemento == "Q") {
        segundoComplemento = "Queijo";
    } else if (segundoComplemento == "B"){
        segundoComplemento = "Bacon";
    } else if (segundoComplemento == "A"){
        segundoComplemento = "Alface";
    } else if (segundoComplemento == "T") {
        segundoComplemento = "Tomate";
    } else if (segundoComplemento == "P"){
        segundoComplemento = "Picles";
    }
    
    if (primeiroComplemento == "Alface" || primeiroComplemento == "Tomate"|| primeiroComplemento == "Picles" 
            || segundoComplemento == "Alface" || segundoComplemento == "Tomate"|| segundoComplemento == "Picles"){
        
            var molho = Number(ler("Você deseja molho ?\nDigite 1 - Sim\nDigite 2 - Não"));

        if (molho == 1) {
            console.log("Lanche com", primeiroComplemento,"e", segundoComplemento,",com molho.");
        } else {
            console.log("Lanche com", primeiroComplemento,"e", segundoComplemento,",sem molho.");
        }
    } else {
        console.log("Lanche com", primeiroComplemento,"e", segundoComplemento,",sem direto a molho.");
    }

} else {
    console.log("Muito obrigado", nome,"Volte Sempre !!");
}
