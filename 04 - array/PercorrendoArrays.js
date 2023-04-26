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


// acessando array de um Objeto
const obj = {
    chars: ["A", "B", "C"]
}
        
    let letraA = ""
    let letraB = ""
    let letraC = ""

    for(let i = 0; i < obj.chars.length; i++) {
        let letras = obj.chars[i];
        console.log(letras)
    if(letras == 'A') {
        letraA = letras;
    } if (letras == 'B') {
        letraB = letras;
    } else {
        letraC = letras;
    }
    }

    console.log("---")
    console.log(letraA)
    console.log(letraB)
    console.log(letraC)