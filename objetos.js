//Estrutura de dados, consegui guarda diferentes conteudos dentro de uma váriavel, mas para acessar eles tem q ter a chave, objeto definido por chave e valor

let pessoa = { 
    nome: 'Aline',
    'altura-da-pessoa': 1.67, // o nome da chave só precisa colocar entre aspas se for ter - ou _ e para acessar essa informação só através dos colchetes, como abaixo
    idade: 36,

}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa['altura-da-pessoa']);

// como adicionar um elemento ou par de chaves

pessoa.marido = 'Diego'
console.log(pessoa);

// como remover um par de chaves
delete pessoa['altura-da-pessoa']
console.log(pessoa);

//adicionando
pessoa.altura = 1.77
console.log(pessoa);

//alterando
pessoa.altura = 1.67
console.log(pessoa);

console.clear()

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

