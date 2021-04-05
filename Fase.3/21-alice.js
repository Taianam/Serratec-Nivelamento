var soma= 345.00 + 1545.00;

var tresVezes = parseFloat(soma/3);
var cincoVezes=  parseFloat(soma/5);
var porcentagem= parseFloat (soma * (1.5/100) );
var dezVezes = (porcentagem + soma) / 10;

console.log("Avista=", soma.toFixed(2));
console.log("Em 3 X sem juros = R$", tresVezes.toFixed(2));
console.log("Em 5 X sem juros = R$", cincoVezes.toFixed(2));
console.log("Em 10 X com 1,5% de juros = R$", dezVezes.toFixed(2));

