
function numerosAleatoriosAlunos() {

    const numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros[i] = Math.floor(Math.random() * 100);
    }
    console.log(numeros)
    return 'Maior Número = '.concat(Math.max(...numeros));

}

function print(texto) {
    console.log(texto);
}

module.exports = { numerosAleatoriosAlunos, print };