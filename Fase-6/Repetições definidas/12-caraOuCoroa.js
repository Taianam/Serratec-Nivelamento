// O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente 
// as aparições de caras ou coroas.Pesquise sobre a função de números aleatórios, para sortear um 
// número e usá-lo como sendo a resposta da moeda.

for (let index = 0; index < 1000; index++) {
  
    console.log("GIRO>", index)

    if (index == 999){
        var resultado = Math.floor(Math.random() * 2) + 1;
        if (resultado == 2){
            console.log("O resultado é COROA")
        }else{
            console.log("O resultado é CARA")
        }
    }
}

