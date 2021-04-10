// Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, 
// além da equivalência com os graus Fahrenheit.

for (let index = 0; index <= 40; index++) {
    var conversao = ((index * 9) / 5) + 32;
    console.log(index,"º Celsius. >>", conversao, "º Fahrenheit.")
}

