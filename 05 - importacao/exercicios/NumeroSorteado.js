/*
 Em uma sala que contém 5 alunos foi sorteado um número de 1 a 100.
 - Faça um programa que receba os números sorteados para os alunos e moste o maior número sorteado.
*/

const numeros = [];
for (let i = 0; i < 5; i++) {
    numeros[i] = Math.floor(Math.random() * 100);
}

// --- VERIFICANDO O MAIOR VALOR DE UMA LISTA/ARRAY: ---
let maior = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

//console.log(numeros);
console.log(`alunoA = ${numeros[0]}, alunoB = ${numeros[1]}, alunoC = ${numeros[2]}, alunoD = ${numeros[3]}, alunoE = ${numeros[4]}`);
console.log(maior);