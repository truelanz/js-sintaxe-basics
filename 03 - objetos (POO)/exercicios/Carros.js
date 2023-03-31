/*
 - Crie uma classe para representar carros:
  - Os carros possum uma marca, cor e gasto médio de combustível por KM.
  - Crie um método que dado a quantidade de quilômetro e o preço do combustível, 
  mostree o valor gasto em reais com combustível para realizar o percurso.
*/

class Carro {

    marca;
    cor;
    mediaKmLitro;

    constructor(marca, cor, mediaKmLitro) {
        this.marca = marca;
        this.cor = cor;
        this.mediaKmLitro = mediaKmLitro;
    }

    descreverCarro() {
        console.log(`Carro ${this.marca} cor ${this.cor} consumo de ${this.mediaKmLitro} km/litro.`);
    }

    gastoEmCombustivelPercurso(precoCombustivel, distanciaKm) {
        const custoTrajeto = (distanciaKm / this.mediaKmLitro) * precoCombustivel;
        return console.log(`Você gastará R$ ${custoTrajeto.toFixed(2)} para percorrer essa distância.`);
    }
}

//FerrariF8 - criação de objeto ferrariF8 na classe Carros, e utização de métodos.
const ferrariF8 = new Carro('Ferrari', 'vermelho', 6.8);
ferrariF8.descreverCarro();
ferrariF8.gastoEmCombustivelPercurso(5.65, 100);

//Audi Q8 - criação de objeto audi Q8 na classe Carros, e utização de métodos.
const audiQ8 = new Carro('Audi', 'preto', 7.3);
audiQ8.descreverCarro();
audiQ8.gastoEmCombustivelPercurso(5.65, 100);