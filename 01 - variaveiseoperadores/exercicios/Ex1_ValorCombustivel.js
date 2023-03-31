/*Desafio 1 - Calcular valor gasto de combustível em uma viagem:

3 variáveis:
1 - Preço do combustível;
2 - Preço etanol;
3 - Tipo de combustível do carro
4 - Valor médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gastos de combustível
para realizar a viagem; */

//preço do combustível em SP - 25/03/23
const precoGasolina = 5.54;
//preço do etanol em SP - 26/03/23
const precoEtanol = 3.69;
//media de KM por litro gasolina HB20
const kmPorLitroGasolina = 14;
//media de KM por litro etanol HB20
const kmPorLitroEtanol = 9.5;
//distancia da viagem
const distanciaEmKm = 100;
const tipoCombustivelAbestecido = 'Etanol';

if (tipoCombustivelAbestecido === 'Gasolina') {
    let auxiliar = distanciaEmKm / kmPorLitroGasolina;
    let precoFinalCombustivel = auxiliar * precoGasolina;
    console.log('Será necessário gastar: ' + precoFinalCombustivel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " em combustível (gasolina).");
} else if (tipoCombustivelAbestecido === 'Etanol') {
    let auxiliar = distanciaEmKm / kmPorLitroEtanol;
    let precoFinalCombustivel = auxiliar * precoEtanol;
    console.log('Será necessário gastar: ' + precoFiFnalCombustivel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " em combustível (etanol).");
} else {
    console.log('Não programei isso...')
}
