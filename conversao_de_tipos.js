//Coerção, conversão

//Explícita

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoString = String(numero)

console.log(numeroEmFormatoString, typeof numeroEmFormatoString);

console.log(Number('123456'));
console.log(Number('123456.234'));
console.log(parseInt('123456.234'));
console.log(parseFloat('123456.234'));
console.log(Boolean('123456.234'));
console.log(Boolean(0));// somente o número 0 vai entregar um false, os outros números serão vdd
console.log(Boolean(1));

console.clear();

console.log(10 + 1);
console.log(10 + '1'); // junta tipo number + string
console.log(10 - '1'); // senão + todos os outros operadores aritméticos ele vai converter para number
console.log(10 * '2');
console.log(10 - 'um'); //not a number algo de errado vc fez rsrs

let n = 1 +'1';// texto 11
n = n -1; //texto 11-1 =10
console.log(n); //10

console.log(2 + 3 + 4 +'5'); //95, será um number 9 + string 5

console.log("5" + 2 + 3 + 4 ); //5234 tudo será texto string 52 mais number 3 string 523 + number 4 = string 5234

console.log("10" - "4" - "3" - 2 + "5"); //15 - todos number