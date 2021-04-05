// Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, 
// e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça 
// as substituições.x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12 M: maior que; m: menor que; 
// MI: maior ou igual; mi: menor ou igual; mod: resto; <>: diferenteDica: Para algumas operações 
// será necessário o uso de parênteses.

const x = 6.0; 
const y = 2; 
const z = 4.000; 
const a = 8; 
const b = 7.5; 
const c = 12;

const d = (x - y) > a
const e = (x - y * a) > (c % y)
const f =  y != c
const g = (x * y) != c
const h = (c % y) <= (y % c)
const i = a < b
const j =  (((z / a) + (x * y )) - 5) >= b
const k =  ((c * z) + 2) == ((a * x) + y)
const l = c == (z + b)
const m = (y * 2) !=  (7 - b)

console.log("Resultado x - y M a", d );
console.log("Resultado x - y * a M c mod y", e);
console.log("Resultado y <> c", f);
console.log("Resultado x * y <> c", g);
console.log("Resultado c mod y mi y mod c", h);
console.log("Resultado a m b", i);
console.log("Resultado z / a + x * y - 5 MI b", j);
console.log("Resultado c * z + 2 = a * x + y", k);
console.log("Resultado c = z + b", l);
console.log("Resultado y * 2 <> 7 - b", m);

