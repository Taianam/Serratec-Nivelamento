// O programa “Compromissos” gerencia a sua agenda do mês. 
// Você pode digitar um compromisso, informando o dia e a descrição do evento,
//  e consultar se existe algum apontamento para determinado dia.

const ler = require("prompt-sync")();

var dia = [];

do{

var diaQUeAPessoaDigitou =  Number( ler("Olá, que dia do mês deseja agendar um compromisso?"));
var esseDiaJaexiste = "";



 
    for (let index = 0; index < dia.length; index++) {
        if ( dia[index] == diaQUeAPessoaDigitou ){
            esseDiaJaexiste = true;
        } 
    }



    if (esseDiaJaexiste == true){
        var condicao = ler("Infelizmente esse dia já possui compromisso, deseja agendar outro dia?")
    }else{
        dia.push(diaQUeAPessoaDigitou);
        let compromisso= ler(" Qual compromisso deseja gendar no dia " + diaQUeAPessoaDigitou +"?");
        console.log("Obrigado, seu compromisso " + compromisso + " foi agenda com sucesso!");
        condicao =  ler("Deseja continuar ?")
    }

} while(condicao == "sim" )


    

