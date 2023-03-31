/*
Crie um algorítimo que dado o *peso e a *altura de um adulto, mostre
sua condição de acordo com a tabela abaixo:

- abaixo de 18.5 abaixo do peso
- entre 18.5 e 25 Peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obeso;
- acima de 40 obesidade grave.
*/

//Organizando códigos com funções..

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return 'abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'peso normal.';
    } else if (imc >= 25 && imc < 30) {
        return 'acima do peso.';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso.';
    } else {
        return 'obesidade grave.';
    }
}

//organizar código *principal em uma function main
function main() {
    const peso = 72;
    const altura = 1.78;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();

//FUNÇÃO IMEDIATAMENTE INVOCADA:
//UTILIZANA PARA WEB...
//main
(function() {
    const peso = 90;
    const altura = 1.69;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();


//manipulando e modificando uma função: 
//as funções e, javascript são como valores...
main = function(){
    console.log(1);
}

main();