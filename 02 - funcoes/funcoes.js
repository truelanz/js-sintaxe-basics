//estrutura básica de uma funcao Node.js
function funcao() {
    console.log('estrutura basica de uma função')
}

funcao();

//Criando função para calcular número ao quadrado.
function aoQuadrado(valor) {
    return valor * valor;
}

console.log('ao Quadrado ->', aoQuadrado(10));

//função para incrementar percentual/juros
function incrementarPercentual(valor, percentual) {
    const acrescimo = (percentual / 100) * valor;
    return console.log('incrementar percentual ->', valor + acrescimo);
}

incrementarPercentual(125, 30);