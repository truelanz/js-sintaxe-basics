
//importando functions;

//criar variavel com um tipo, atribuir require('./NomeDaClasseImportada');

// -> const funcoes = require('./FuncoesAuxiliares');
//ou pode importar direto as funções:
const { gets, print } = require('./FuncoesAuxiliares');


/* - > console.log(funcoes);
console.log(funcoes.gets()); */

// -> execução da função usando a primeira maneira de importação
//funcoes.print('primeira maneira de importação;')

// -> execução da função usando a SEGUNDA maneira de importação
print('SEGUNDA maneira de importação');
print(gets());