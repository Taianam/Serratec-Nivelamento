// No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, 
// o programa pergunta se o leitor quer apreciar novamente os versos.

const ler = require("prompt-sync")();

var imprimirNovamente = "";

do {
    console.log("Numa folha qualquer eu desenho um sol amarelo");
    console.log("E com cinco ou seis retas é fácil fazer um castelo");
    console.log("Corro o lápis em torno da mão e me dou uma luva");
    console.log("E se faço chover, com dois riscos tenho um guarda-chuva");
    console.log("");
    console.log("Se um pinguinho de tinta cai num pedacinho azul do papel");
    console.log("Num instante imagino uma linda gaivota a voar no céu");
    console.log("Vai voando, contornando a imensa curva norte e sul");
    console.log("Vai voando, contornando a imensa curva norte e sul");
    console.log("Pinto um barco a vela branco, navegando, é tanto céu e mar num beijo azul");
    console.log("");
    console.log("Entre as nuvens vem surgindo um lindo avião rosa e grená");
    console.log("Tudo em volta colorindo, com suas luzes a piscar");
    console.log("Basta imaginar e ele está partindo, sereno, indo");
    console.log("E se a gente quiser ele vai pousar");
    console.log("");
    console.log("Numa folha qualquer eu desenho um navio de partida");
    console.log("Com alguns bons amigos bebendo de bem com a vida");
    console.log("De uma América a outra consigo passar num segundo");
    console.log("Giro um simples compasso e num círculo eu faço o mundo");
    console.log("");
    console.log("Um menino caminha e caminhando chega no muro");
    console.log("E ali logo em frente, a esperar pela gente, o futuro está");
    console.log("E o futuro é uma astronave que tentamos pilotar");
    console.log("Não tem tempo nem piedade, nem tem hora de chegar");
    console.log("Sem pedir licença muda nossa vida, depois convida a rir ou chorar");
    console.log("");
    console.log("Nessa estrada não nos cabe conhecer ou ver o que virá");
    console.log("O fim dela ninguém sabe bem ao certo onde vai dar");
    console.log("Vamos todos numa linda passarela");
    console.log("De uma aquarela que um dia, enfim, descolorirá");
    console.log("");
    console.log("Numa folha qualquer eu desenho um sol amarelo (que descolorirá)");
    console.log("E com cinco ou seis retas é fácil fazer um castelo (que descolorirá)");
    console.log("Giro um simples compasso e num círculo eu faço o mundo (que descolorirá)");
    console.log("");
    imprimirNovamente = ler("Deseja imprimir novamente ? ");
} while (imprimirNovamente == "sim");