/*
- Crie uma classe para reepresentar pessoas.
  - Para cada pessoa teremos os atributos nome, peso e altura.
  - As pessoas podem dizer o valor do seui IMC;
  - Instancia uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e 
  peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
        
    }

    classificarImc() {
        //this - Além de chamar parametros de classe, this. também pode pegar métodos(function);
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return `imc ${imc.toFixed( 2)} --> abaixo do peso.`;
        } else if (imc >= 18.5 && imc < 25) {
            return `imc ${imc.toFixed( 2)} --> peso normal.`;
        } else if (imc >= 25 && imc < 30) {
            return `imc ${imc.toFixed( 2)} --> acima do peso.`;
        } else if (imc >= 30 && imc < 40) {
            return `imc ${imc.toFixed( 2)} --> obeso.`;
        } else {
            return `imc ${imc.toFixed( 2)} --> obesidade grave.`;
        }
    }

}

const jose = new Pessoa('Crislaine', 70, 1.75);
console.log(jose);
console.log(jose.classificarImc());

