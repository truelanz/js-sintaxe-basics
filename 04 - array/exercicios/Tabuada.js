/*
Crie um programa que dado um número imprima a sua tabuada:
*/

 const numero = 6;

 console.log('TABUADA DO', numero + ':');

 for(let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
 }

