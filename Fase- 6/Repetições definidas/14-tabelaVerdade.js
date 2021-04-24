// O “gerador de tabela verdade” solicita ao aluno de programação qual operador lógico quer visualizar 
// (e, ou), e depois imprime na tela a tabela verdade montada em um laço.

const ler = require("prompt-sync")();

var condicao = Number(ler("Qual operador deseja montar a tabela, digite 1 = E digite 2 - OU ?"));

var verdade = 1 == 1;
var falso = 1 !== 1;
var resultado = "";

    if (condicao == 1) {
        for (let index = 0; index < 4; index++) {
    
            if (index == 0){
                resultado = verdade && verdade;
                console.log("V | V |", resultado);
            }else if (index == 1){
                resultado = verdade && falso;
                console.log("V | F |", resultado);
            }else if (index == 2){
                resultado = falso && verdade;
                console.log("F | V |", resultado);
            }else if (index == 3) {
                resultado = falso && falso;
                console.log("F | F |", resultado);
            }
        }
    } else {
        for (let index = 0; index < 4; index++) {
                
            if (index == 0){
                resultado = verdade || verdade;
                console.log("V | V |", resultado);
            }else if (index == 1){
                resultado = verdade || falso;
                console.log("V | F |", resultado);
            }else if (index == 2){
                resultado = falso || verdade;
                console.log("F | V |", resultado);
            }else if (index == 3) {
                resultado = falso || falso;
                console.log("F | F |", resultado);
            }
        }
    }