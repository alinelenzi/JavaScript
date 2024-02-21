const input = require('readline-sync');
let nota;
let totalNotas = 0;

for (let i = 1; i <= 3; i++){
    nota = Number(input.question("Informe sua nota da C" + i + ": "));
    totalNotas += nota;
}

let media = Math.round(totalNotas/3);
console.log(`Sua média é: ${media}.`); // template strings
