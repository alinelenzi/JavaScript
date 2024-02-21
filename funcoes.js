//a função é um trecho do seu código q vc vai poder reaproveitar, reutilizar várias vezes dentro do seu script, do seu código, ficando bem mais fácil a manutenção, qdo mexe nela, atualiza em todos os lugares q a usou e o código fica menor
// Primeiro define e depois a chama pelo nome

function saudacao(nome, curso='JavaScript'){ // pode deixar um parametro default, padrão, caso a pessoa não preencha, vai ser preenchido com a sua opção, com o padrão default
    console.log(`Olá ${nome}, seja bem-vindo(a) ao nosso curso de ${curso}!`); // aqui imprime
}

saudacao('Aline', 'HTML e CSS'); // senão colocar o parametro não vai dá erro, o javaScript entendi ela como underfined, e vai preencher com essa palavra, caso não tenha colocado default no parametro

// diferença entre imprimir e retornar, retorna um valor

function soma(numero1, numero2){ 
    return numero1 + numero2; //quando retorna um valor, então temos q guarda esse valor em algum lugar, em uma váriavel ou uma constante
                              //toda vez q usa o return numa função, ela se encerrra ali, não imprimi nada depois do retorno
}

let resultado = soma(10, 20); //salvando o retorno nessa váriavel

console.log(`A soma é igual ${resultado}.`);


function maiorDoQue50(numero){ 
    if(numero > 50){
        return true;
    }
    return false;
}


hello = function() {
    return "Hello World!";
}
//with arrow function 
hello = () => {
    return "Hello World!";
}

let ola = hello()
console.log(ola)

hello = () => "Hello World!";

//com parametro
hello = (nome) => "Hello " + nome + "!";

ola = hello('Aline')
console.log(ola)