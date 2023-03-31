/* Calcular nota de aluno:

- Média menor que 5, reprovador;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const nota1 = 8, nota2 = 5, nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Sua média foi ' + media.toFixed(0) + ' REPROVADO!');
} else if (media >= 5 && media <= 7) {
    console.log('Sua média foi ' + media.toFixed(0) + ' RECUPERAçÃO!');
} else {
    console.log('Sua média foi ' + media.toFixed(0) + ' APROVADO!');
}