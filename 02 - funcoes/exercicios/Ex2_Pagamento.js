/*
Calcule o quanto deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

- USAR FUNCTION...
*/

function aplicarDesconto(precoDoProduto, percentual) {
    return precoDoProduto - ((percentual / 100) * precoDoProduto);
}

function aplicarJuros(precoDoProduto, percentual) {
    return precoDoProduto + ((percentual / 100) * precoDoProduto);
}

const produto = 118.58;

function formaDePagamento(pagamento) {
    if (pagamento === 1) {
        return aplicarDesconto(produto, 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            + ' - Pagamento no DÉBITO - Você ganhou 10% de desconto.';
    } else if (pagamento === 2) {
        return aplicarDesconto(produto, 15).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            + ' - Pagamento com PIX ou DINHEIRO - Você ganhou 15% de desconto.';
    } else if (pagamento === 3) {
        return produto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            + ' - Preço normal, sem desconto nem juros.';
    } else if (pagamento === 4) {
        return aplicarJuros(produto, 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            + ' - Preço com 10% de Juros, parcelado em mais de 2 vezes.';
    } else {
        return 'Opção de pagamento inválida. Escolha entre: 1: DEBITO, 2: PIX ou DINHEIRO, 3: 2X ou 4: MAIS DE 2X.';
    }

}

function main() {
    console.log(formaDePagamento(2));
}

console.log(main());



