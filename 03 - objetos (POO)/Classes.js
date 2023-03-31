class Pessoa {
    nome;
    idade;

    //constructor com parâmetros;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //Em classes não é necessário avisar que é uma function'.
    descreverPessoa() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

//instanciando Classe/Objeto sem o constructor:
const cleber = new Pessoa();
cleber.nome = 'Cleber S. Amaro';
cleber.idade = 45;

const joao = new Pessoa();
joao.nome = 'João P. Araújo';
joao.idade = 39;

console.log(cleber);
cleber.descreverPessoa();

console.log(joao);
joao.descreverPessoa();

//-----------------------------------------------------\\

//instanciando CLasse/Objeto com o constructor:
const benjamim = new Pessoa('Benjamim', 8)
const paulo = new Pessoa('Paulo', 21)

benjamim.descreverPessoa();
paulo.descreverPessoa();

//------------------------------------------------------\\

//método/função para comparar idade das pessoas da Classe.
function compararIdade(pessoa1, pessoa2) {
    if(pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velhor que ${pessoa2.nome}`);
    } else if (pessoa2.idade> pessoa1.idade){
        console.log(`${pessoa2.nome} é mais velhor que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa2.nome} tem a mesma idade que ${pessoa1.nome}`);
    }
}

compararIdade(benjamim, paulo);


