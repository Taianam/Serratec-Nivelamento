// O abecedário da Xuxa agora segue cantando a definição
//  musical até que a criança decida parar de ouvir, pressionando o zero.

const ler = require("prompt-sync")();
console.log("Caso não queira mais ver nenhuma letra digite 0:")


do {
    var letra = ler("Digite uma letra de A-Z: ").toLowerCase();
switch (letra) {
    
    case ("a"):
        console.log("A de amor");
        break;

    case ("b"):
        console.log("B de baixinho");
        break;

    case ("c"):
        console.log("C de coração");
        break;

    case ("d"):
        console.log("D de docinho");
        break;

    case ("e"):
        console.log("E de escola");
        break;

    case ("f"):
        console.log("F de feijão");
        break;

    case ("g"):
        console.log("G de gente");
        break;

    case ("h"):
        console.log("H de humano");
        break;

    case ("i"):
        console.log("I de igualdade");
        break;

    case ("j"):
        console.log("J de juventude");
        break;

    case ("l"):
        console.log("L de liberdade");
        break;

    case ("m"):
        console.log(" M de molecagem");
        break;

    case ("n"):
        console.log("N de natureza");
        break;

    case ("o"):
        console.log(" O de obrigado");
        break;

    case ("p"):
        console.log("P de proteção");
        break;

    case ("q"):
        console.log("Q de quero-quero");
        break;

    case ("r"):
        console.log("R de riacho");
        break;

    case ("s"):
        console.log("S de saudade");
        break;

    case ("t"):
        console.log("T de terra");
        break;

    case ("u"):
        console.log("U de universo");
        break;

    case ("v"):
        console.log("V de vitória");
        break;

    case ("x"):
        console.log("X de Xuxa");
        break;

    case ("z"):
        console.log("Z de zum-zum-zum-zum-zum");
        break;

}
}while( letra != "0" );

console.log("Obrigada por brincar com a gente, volte sempre!");