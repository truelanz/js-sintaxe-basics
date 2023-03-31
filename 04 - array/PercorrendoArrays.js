const notas = [];

notas.push(5);
notas.push(8);
notas.push(4);
notas.push(7);
notas.push(5);
notas.push(9);

//Calculando média de um array list.
let soma = 0;
for(let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

const media = soma / notas.length;
console.log('Média:', media.toFixed(1));

//Percorrendo String:
const nome = 'José';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}