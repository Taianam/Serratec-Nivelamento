// O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela 
// caia do jeito que você queria! Cada jogada será exibida no console.

const ler = require("prompt-sync")();

var escolhaUmLado = ler("Você deseja CARA ou COROA ?");
var resultado = "";


while (escolhaUmLado !== resultado) {

    var minuto = new Date;

    for (let index = 0; index < minuto.getMinutes(); index++) {

            if(resultado == "coroa"){
                resultado = "cara"
            }else{
                resultado = "coroa"
            }
            
            console.log("=====",resultado,"=====");
            console.log("=GIRO>", index)
    }
}
console.log("===== FIM =====")
console.log("Você venceu, nem esperava rs. Resultado", resultado);



// while (escolhaUmLado !== resultado) {

//     var minuto = new Date;
//     var contador = 0;

//     while (contador < minuto.getMinutes()) {

//          contador++;

//         if(resultado == "coroa"){
//             resultado = "cara"
//         }else{
//             resultado = "coroa"
//         }
//         console.log("=====",resultado,"=====")
        
//     }
// }
// console.log("===== FIM =====")
// console.log("Você venceu, nem esperava rs. Resultado", resultado);