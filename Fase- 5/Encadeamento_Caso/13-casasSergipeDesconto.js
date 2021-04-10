// O vendedor das Casas Sergipe não pode perder negócio. Por isso, após o item, o sistema pergunta
//  se deseja “Exibir preço com desconto”, que deve abater 5% no valor do produto.

const ler = require("prompt-sync")();

var codigoProduto = Number(ler("Digite o codigo do produto\n"));
var valorDoProduto = 0;
var nomeProduto = "";
var desconto = "";

switch (codigoProduto) {
    case (001):
        valorDoProduto = 100,00;
        nomeProduto = "Cadeira simples";
        console.log("Nome do produto =>", nomeProduto);
        console.log("Valor => R$", valorDoProduto);
        break;
    case (002):
        valorDoProduto = 200,00;
        nomeProduto = "Cadeira de luxo";
        console.log("Nome do produto =>", nomeProduto);
        console.log("Valor => R$", valorDoProduto);
        break;
    case (003):
        valorDoProduto = 450,00;
        nomeProduto = "Mesa simples";
        console.log("Nome do produto =>", nomeProduto);
        console.log("Valor => R$", valorDoProduto);
        break;
    case (004):
        valorDoProduto = 900,00;
        nomeProduto = "Mesa luxo";
        console.log("Nome do produto =>", nomeProduto);
        console.log("Valor => R$", valorDoProduto);
        break;
    case (005):
        valorDoProduto = 1500,00;
        nomeProduto = "Cama";
        console.log("Nome do produto =>", nomeProduto);
        console.log("Valor => R$", valorDoProduto);
        break;
    default:
        console.log("Produto não encontrado !")
        break;
}

if (valorDoProduto > 0) {

    desconto = Number(ler("Exibir preço com desconto ?\nDigite 1 - Sim\nDigite 2 - Nao\n"));

    switch (desconto) {
        case (1):
            var descontoTotal = valorDoProduto * 0.95;
            console.log("Valor do produto", nomeProduto, "com desconto: R$", descontoTotal.toFixed(2));
            break;
        case (2):
            console.log("Valor do produto", nomeProduto, "Total da venda: R$", valorDoProduto.toFixed(2));
            break;
        default:
            console.log("Opção inválida !")
            break;
    }
}