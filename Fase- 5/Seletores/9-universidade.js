// Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos 
// recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa
//  irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

const ler = require("prompt-sync")();

var diaAtual = parseInt(ler("Digite o dia atual ?"));
var numeroBoleto = ler("Numero do boleto ? ");
var diaPagamento = parseInt(ler("Dia do pagamento ?"));

var desconto = diaPagamento >= 10 && diaPagamento <= 13;

console.log("+++ RESULTADO +++")

if (desconto) {
    console.log("Desconto na próxima mensalidade do boleto", numeroBoleto, "?", desconto);
} else {
    console.log("Desconto na próxima mensalidade do boleto", numeroBoleto, "?", desconto);
}

