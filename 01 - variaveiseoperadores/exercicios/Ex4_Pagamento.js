/*
Calcule o quanto deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const memoriaRam8gb = 150.68;
const formaPagamento = 2;

//À vista DEBITO
let precoFinalDescontoDebito = memoriaRam8gb - (memoriaRam8gb * 0.10);
//console.log(precoFinalDescontoDebito)

//Á vista DINHEIRO ou PIX
let precoFinalDescontoDinheiroPix = memoriaRam8gb - (memoriaRam8gb * 0.15);
//console.log(precoFinalDescontoDinheiroPix)

//Em duas vezes - preço normal sem juros
let precoNormal2x = memoriaRam8gb;

//Acima de 2x
let precoJuros = memoriaRam8gb + (memoriaRam8gb * 0.10);

if (formaPagamento === 1) {
    console.log(precoFinalDescontoDebito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        + ' - Pagamento no DÉBITO - Você ganhou 10% de desconto.')
} else if (formaPagamento === 2) {
    console.log(precoFinalDescontoDinheiroPix.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        + ' - Pagamento com PIX ou DINHEIRO - Você ganhou 15% de desconto.')
} else if (formaPagamento === 3) {
    console.log(precoNormal2x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        + ' - Preço normal, sem desconto nem juros.')
} else if (formaPagamento === 4){
    console.log(precoJuros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        + ' - Preço com 10% de Juros, parcelado em mais de 2 vezes.')
} else {
    console.log('Opção de pagamento inválida. Esconlha entre: 1: DEBITO, 2: PIX ou DINHEIRO, 3: 2X ou 4: MAIS DE 2X.')
}

