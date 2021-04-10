// O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. 
// Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos 
// em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.

const ler = require("prompt-sync")();

var pagamento= parseFloat(ler("Valor do pagamento: R$ "));

if (pagamento > 1000 ){
    console.log("O pagamento de R$" +pagamento.toFixed(2)+ " séra efetuado em cheque.");
} else{
    console.log("O pagamento de R$" +pagamento.toFixed(2)+ " será efetuado em dinheiro.");
}