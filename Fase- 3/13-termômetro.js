    const ler = require("prompt-sync")();

    var nome = ler("Olá, qual seu nome?")
    var celsius = ler ("Pazer em te conhecer "+ nome + " digite o valor da temperatura em celsius: ");
    var fahrenheit= (celsius * 9/5 ) + 32 ;
    
    console.log(nome, "a temperatura em fahrenheit é:", fahrenheit);
  


