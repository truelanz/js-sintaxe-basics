//CONSTRUÇÃO DE OBJETO LITERAL;
// --semelhante com a construção JSON-- chave: tipo(valor).
const pessoa = {
    nome: 'Jhonatan S. Sousa',
    idade: 26,
    genero: 'masculino',

    //Adcionando um método(function) dentro de um objeto
    descreverPessoa: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`); //Usar `(acento agudo) para instanciar com this. em um método...
    }
};

//incrementação dinâmica ao objeto, duas maneiras.
pessoa.altura = 1.78;
//ou:
pessoa['altura'] = 1.68;

//alterando objeto de forma direta.
pessoa.nome = 'Higor R. Cruz',
pessoa.idade = 28;
//ou de forma dinâmica:
pessoa['nome'] = 'Cleber C. Oliveira';
pessoa['idade'] = 45;

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.genero);
console.log(pessoa);

//deletar elemento chave/valor de objeto.
delete pessoa.genero;
console.log(pessoa);

//chamando método do objeto.
pessoa.descreverPessoa();

//acessando atributo do objeto com a String da chave.
console.log(pessoa['idade']);