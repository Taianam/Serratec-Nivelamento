// No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita,
//  e receberá alguma informação singular sobre ela. Para se tornar interessante, 
// a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral.

const ler = require("prompt-sync")();

var nome = ler("Digite seu nome ?")
console.log("---- Bem vindo", nome, "----");
console.log("=============================================");

var fruta =ler("Digite o nome fruta ?").toLowerCase();

switch (fruta) {
    case ("maçã"):
            console.log("1 - É boa para o coração");
            console.log("2 - Diminui o risco de diabetes");
            console.log("3 - Afasta a prisão de ventre");
            console.log("4 - Combate a asma");
            console.log("5 - Previne cáries");
            console.log("6 - Previne o câncer");
        break;
    case ("laranja"):
            console.log("1 - Melhora o funcionamento do sistema digestivo");
            console.log("2 - Protege contra doenças cardiovasculares");
            console.log("3 - Controla a pressão alta");
            console.log("4 - Ajuda a controlar a glicemia");
            console.log("5 - Fortalece o sistema imunológico");
            console.log("6 - Retarda o envelhecimento");
        break;
    case ("uva"):
            console.log("1 - Prevenção de problemas cardíacos");
            console.log("2 - Melhora da saúde da visão");
            console.log("3 - Controle da pressão arterial");
            console.log("4 - Equilíbrio da glicose no sangue");
            console.log("5 - Aumento da saúde do sistema digestório.");
            console.log("6 - Diminuição dos riscos de desenvolvimento de câncer");
        break;
    case ("abacaxi"):
            console.log("1 - Melhora a digestão");
            console.log("2 - Aumenta a imunidade");
            console.log("3 - Diminui os sintomas de artrite");
            console.log("4 - Fortalece o organismo após os exercícios");
            console.log("5 - Emagrece");
            console.log("6 - Protege o coração");
        break;
    case ("banana"):
            console.log("1 - Recuperação muscular");
            console.log("2 - Melhora no humor");
            console.log("3 - Ajuda a emagrecer");
            console.log("4 - Disposição física e mental");
            console.log("5 - Combate ao fumo");
            console.log("6 - Controle da pressão arterial");
        break;
    case ("mamão"):
            console.log("1 - Ajuda a emagrecer");
            console.log("2 - Auxilia na digestão");
            console.log("3 - Ajuda na cicatrização");
            console.log("4 - Fortalece o sistema imunológico");
            console.log("5 - Previne gripes e resfriados");
            console.log("6 - Controla o colesterol");
        break;
    default:
        console.log("Fruta não catologada")
        break;
}

