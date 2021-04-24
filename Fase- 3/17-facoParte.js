const ler = require("prompt-sync")();

var  x = parseFloat(ler("Quantos anos tem a cidade de Teresópolis? "));
var z = parseFloat(ler("Quantos anos você tem? "));
var y = x-z ;

console.log("Teresópolis tem " + x +" anos. Desses, foram " + y + " antes de mim. Mas nos últimos " + z + " anos ela conta comigo!" );