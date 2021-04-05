/*13. Essa frase tornou-se famosa no filme Homem-Aranha,e tem relação com o trabalho do programador: “Com grandes
poderes, vêm grandes responsabilidades.”. Você irá criar essa frase fazendo *uma atribuição nova* para cada caractere. 
No editor de código, separe as palavras em seções para facilitar a leitura (deixar uma linha em branco entre as 
palavras). Você pode criar quantas variáveis quiser, contudo, lembre que cada letra será atribuída em uma nova linha.
Dica: Observe que uma das palavras se repete na frase. Será que conseguimos escrevê-la sem “copiar e colar”?
a. Desafio: Pode ser uma experiência muito legal tentar solucionar esse algoritmo utilizando caracteres Unicode.
Nesse caso, não precisa fazer uma atribuição por linha, basta separar cada palavra em uma variável.*/

var Ho= '\u0043\u006F\u006D';
var me= '\u0067\u0072\u0061\u006E\u0064\u0065\u0073';
var m= '\u0070\u006F\u0064\u0065\u0072\u0065\u0073';
var a='\u002C';
var ra='\u0076\u00EA\u006D';
var n='\u0067\u0072\u0061\u006E\u0064\u0065\u0073';
var ha ='\u0072\u0065\u0073\u0070\u006F\u006E\u0073\u0061\u0062\u0069\u006C\u0069\u0064\u0061\u0064\u0065\u0073';
var ponto='\u002E';
/*
com grandes
poderes, vêm grandes responsabilidades*/
console.log(Ho,me,m+a,ra,n,ha+ponto);