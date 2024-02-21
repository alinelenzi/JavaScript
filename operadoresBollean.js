let numero = 10;
let idade = '10';

console.log(numero > 20); // maior
console.log(numero == 10); // igual
console.log(numero >= 10); // maior igual
console.log(numero <= 10); // menor igual
console.log(numero != idade); // diferente
console.log(numero !== idade); // diferente absoluta
console.log(numero == idade); // igual, compara o conteudo
console.log(numero === idade); // igualdade absoluta, compara o conteudo e tipo
//melhor usar 3 iguais

console.clear()

//Operadores Lógicos
// and = &&
idade = 36;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true; // entendi q ele é igual a true ou somente tenhoCNH, padrão é == true
console.log("Posso Dirigir? ", possoDirigir)

const votoFacultativo = idade <= 18 || idade >=70;
console.log('Posso não votar?', votoFacultativo)

const estouGostandoDoCurso = false;
console.log(estouGostandoDoCurso)
console.log(!estouGostandoDoCurso) // not inverte o valor de false para true e vice-versa

// or = ||


// not = |