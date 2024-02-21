const input = require('readline-sync');

const numero_sorteado = parseInt(Math.random()*10);

//const numero_escolhido = input.question('Escolha um numero de 0 a 100: '); //sempre  vai ler e imprimir uma string, vc terá q alterar isso
let numero_escolhido = Number(input.question('Escolha um numero de 0 a 10: '));

while(numero_escolhido !== numero_sorteado){
    
    console.log("Você errou o número. Tente novamente...")

    numero_escolhido = Number(input.question('Escolha um numero de 0 a 10: '));
}
console.log("Você acertou, o número sorteado foi: ", numero_sorteado);




