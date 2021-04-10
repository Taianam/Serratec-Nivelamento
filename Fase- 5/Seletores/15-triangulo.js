// O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles
//  ou escaleno.

const ler = require("prompt-sync")();

var a = parseFloat(ler("Digite o valor do lado A ?"));
var b = parseFloat(ler("Digite o valor do lado B ?"));
var c = parseFloat(ler("Digite o valor do lado C ?"));

if (a < b + c && b < a + c && c < a + b) {

    if ( a == b && b == c) {
        console.log("Triângulo Equilátero");      
    } else if (a != b && b != c && c != a) {
        console.log("Triângulo Escaleno!"); 
    } else {
        console.log("Triângulo Isósceles");
    }
} else {
    console.log("Não é um triangulo"); 
}