/* “Sistema do IPVA” avisa ao contribuinte o mês de pagamento do tributo,
de acordo com o final da placa do carro. O motorista irá digitar a placa 
do carro com 4 dígitos inteiros. A resposta do programa será o dígito final
da placa. Como informativo, após a resposta, será impressa a tabela completa
com os meses de pagamento.*/

const ler = require("prompt-sync")();

var numero = ler ("Digite a placa do seu carro:");
console.log("Seu carro é final", numero.charAt(3)+". Confira a tabela de pagamentos:");