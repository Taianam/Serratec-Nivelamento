//Par de Tênis + Par de Tênis + Par de Tênis= 30
var partenis = 30/3;
//Par de Tênis +  Menino com apito + Menino com apito = 20
var meninoApito = (20- partenis ) /2;
// Menino com apito + Par de apito + Par de apito=  13
var parApito = (13- meninoApito)/2;

var tenis= partenis /2;
var apito = parApito /2;
var menino  = meninoApito - apito;

// Tenis + Menino x Apito =
var resultado = tenis + (menino * apito); 

console.log("Tenis + Menino x Apito = ", resultado);
