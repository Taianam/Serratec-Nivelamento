/** 
A loja “Casas Sergipe” vende os seguintes itens:
001 Cadeira simples - R$ 100,00
002 Cadeira luxo - R$ 200,00
003 Mesa simples - R$ 450,00
004 Mesa luxo - R$ 900,00
005 Cama - R$ 1500,00
Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.*/

const ler = require("prompt-sync")();

var nome = ler("Digite o nome do cliente ?")
console.log("---- Bem vindo a Casas Sergipe", nome, "----");
console.log("=============================================");

var codigoProduto = Number(ler("Digite o codigo do produto\n"));

switch (codigoProduto) {
    case (001):
        console.log("Nome do produto => Cadeira simples.");
        console.log("Valor => R$ 100,00");
        break;
    case (002):
        console.log("Nome do produto => Cadeira luxo.");
        console.log("Valor => R$ 200,00");
        break;
    case (003):
        console.log("Nome do produto => Mesa simples.");
        console.log("Valor => R$ 450,00");
        break;
    case (004):
        console.log("Nome do produto => Mesa luxo.");
        console.log("Valor => R$ 900,00");
        break;
    case (005):
        console.log("Nome do produto => Cama.");
        console.log("Valor => R$ 1500,00");
        break;
    default:
        console.log("Produto não encontrado !")
        break;
}