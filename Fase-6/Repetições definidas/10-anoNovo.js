// Na “virada de ano novo”, um mostrador gigante no centro da cidade vai fazer a contagem junto com a 
// galera. A regressiva de 10 segundos termina com o “Feliz ano novo!”.

for (let index = 59; index > 0; index--) {
    
    if (index <= 10) {
        console.log("Contagem", index, "Feliz ano novoooo \\0/");
    } else {
        console.log("Contagem", index);
    }
    
}