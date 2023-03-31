//PRATICANDO - Criando funções.

function getName(name) {
    return console.log(name);
}

getName('Alan');

function ageOfMajority(name, age) {
    if (age > 17) {
        return console.log(name + ' é maior de idade.');
    } else {
        return console.log(name + ' é menor de idade.');
    }
}

ageOfMajority('Alan', 26);