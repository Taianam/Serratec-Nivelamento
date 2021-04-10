// No sistema “Todas as tabuadas”, o aluno de matemática não precisa escolher o número: As tabuadas 
// entre 2 e 10 serão impressas de uma vez.

var resultado = "";

for (let i = 2; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        resultado = i * j;
        console.log(i, "x", j,"=", resultado);
        console.log("---------------")
    }
}