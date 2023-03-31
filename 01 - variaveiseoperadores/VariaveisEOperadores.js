//let é um tipo de variável dinâmica
let variavel = 10;
variavel = 11 * 2;

//const é uma variável imutável CONSTANTE
const pi = 3.14;

console.log(variavel);

//boolean
let corAzul = true;
corAzul = false;
console.log(10 < 5);

//Par/Impar
let numero = 10;
const isParOuImpar = (numero % 2) === 0;
const numeroParString = (numero % 2) == '0';
console.log(isParOuImpar)
console.log(numeroParString)

//if, else e else if.
if (isParOuImpar) {
    console.log("%d Número impar!", numero)
} else {
    console.log("%d é um número par!", numero)
}

const num = 10;
num % 5 === 0
if (num % 5 === 0) {
    console.log("O número é divisível por 5!")
} else if (!num % 5 === 0) {
    console.log("O número não é divisível por 5!")
} else {
    console.log("Informações inválidas...")
}