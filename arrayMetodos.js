const input = require('readline-sync');

//métodos como se fossem funções q estão dentro de uma váriavel, se tem () é uma função exemplo console.log(), o método tbm tem os parenteses()
// consegui guarda diferentes conteudos dentro de uma váriavel, consegui acessar seus elementos pelo indice

const arr1 = [30, 12, 45, 34, 29];
let arr2 = [];
// Fatiamento do array : slice

console.log(arr1.slice(0, 2));// slice(indice_de_inicio, indice_do_final-1)
console.log(arr1.slice(2)); // como se tivesse definido o ínicio e não o fim, vai do 2 até o fim

// Adicionando elementos: push / unshift

console.log("Antes de adicionar: ", arr2);

//arr2.push(Number(input.question('Digite um numero: ')));
arr2.push(10);
arr2.push(20, 30, 40);
arr2.push(1); // inclui na ordem q adiciona, sempre o número q adiciona vai para o final

arr2.unshift(2, 3) // sempre adiciona no começo do array

console.log("Depois de adicionar: ", arr2);

// Removendo elementos: pop / shift


arr2.pop() // sempre remove o ultimo elemento do array e ele retorna o ele q removeu

const elementoRemovido = arr2.pop()
console.log(elementoRemovido)
console.log("Depois de remover com o pop: ", arr2)

arr2.shift() // sempre remove o primeiro elemento do array
const elementoRemovido2 = arr2.shift()
console.log(elementoRemovido2)
console.log("Depois de remover com o shift: ", arr2)

//Concatenando arrays: concat // juntar dois arrays
console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));

console.log(arr2.concat(arr1));

console.clear()

//Buscando elementos: indexOf / lastIndexOf

console.log(arr1)
console.log(arr2.concat(arr1));

let indiceDoElemento45 = arr1.indexOf(45);
console.log(indiceDoElemento45);

let indiceDoElemento38 = arr1.indexOf(38); //sempre q procurar um número e ele não existir no array, ele sempre vai te retornar -1
console.log(indiceDoElemento38);

let indiceDoElemento30 = arr2.indexOf(30); //sempre q procurar um número e tiver ele duas vezes ou mais no array, ele sempre vai te retornar o indice do primeiro
console.log(indiceDoElemento30);

let indiceDoUltimoElemento30 = arr2.lastIndexOf(30); //quando um número e tiver ele duas vezes ou mais no array, caso queira o indice da ultima vez q ele apareceu, use o lastIndexOf, vai procurar de trás pra frente
console.log(indiceDoUltimoElemento30);

//descobrindo a existência de um elemento: incluides

console.log(arr1.includes(10))
console.log(arr1.includes(12))

console.clear()
// Invertendo arrays : reverse

console.log('arr1 normal', arr1);

const arr1Invertido = arr1.reverse();

console.log('arr1 normal', arr1);
