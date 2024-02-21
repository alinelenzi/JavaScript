let arrayVazio = []; //colchetes // consegui guarda diferentes conteudos dentro de uma váriavel

let arr = ["Aline", 36, 1.67, true];

console.log(arr);
console.log(`Primeiro elemento - ${arr[0]}`);
console.log(`Segundo elemento - ${arr[1]}`);
console.log(`Terceiro elemento - ${arr[2]}`);
console.log(`Quarto elemento - ${arr[3]}`);

console.log(arr.length) //tamanho do array ou quantidade de elementos q possui o array



for(let i = 1; i <= arr.length; i++){
    console.log(arr[i])
}

// for of - a cada iteração pega um elemento do meu array
for (let elemento of arr){
    console.log(elemento)
}

// for i - percorrendo os indices do meu array
for (let indice in arr){
    console.log(indice, arr[indice])
}

for (let i in arr){
    console.log(i, arr[i])
}
