//criando array simples:
const alunos = ['Claudio', 'Roberto', 'Alana'];
console.log(alunos);

//lenght - verificar tamanho da lista:
console.log(alunos.length);

//get elemento por index:
console.log(alunos[1]);

//push - Adcionar à lista:
alunos.push('Carlos');

//adcionar à lista especificando index:
alunos[4] = 'Samanta';
console.log(alunos);

//modificanto elemento especificando index:
alunos[1] = 'Renato';
console.log(alunos);

//pop() - removendo último da lista (Como em Pilha LIFO);
console.log(alunos.pop());
console.log(alunos);

//shift - removendo primeiro da lista (Como em Fila FIFO)
console.log(alunos.shift());
console.log(alunos);

//splice - removendo de um index epecificado - .splice(<posição no index:> 0, <quantidade de elementos a serem removidos:> 1)
console.log(alunos.splice(0, 1));
console.log(alunos);
