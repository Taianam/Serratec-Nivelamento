
var porque= ""

if (idade == "sim") porque = "Abaixo ou acima da idade";
if (peso== "sim") porque += ", Abaixo do peso";
if (hepatite == "sim") porque += ", Hepatite";
if ( malaria == "sim") porque += ", Malaria";
if ( recente == "sim") porque += ", Doação recente";


console.log("Motivo: ", porque)