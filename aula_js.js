console.log("Olá Mundo");

/* 
CONST -> é uma variável constante então não é possível reatribuir outro valor
LET -> é uma variável mutável que podemos reatribuir outro valor a qualquer momento
*/

let idade = 21;
const nome = "Maria";

idade = 22

console.log(nome);
console.log(idade);

// Tipos de dados 
/*
> string
    - sempre entre aspas
    - tudo que for um texto

> number/inteiro/float
    - numéricos, seja inteiro ou decimal
    
> boolean/booleano
    - verdadeiro => true
    - falso => false
*/

const verdadeiroFalso = "false";
console.log(verdadeiroFalso);


//  ----------- TIPOS DE DADOS (OBJETOS) ------------

//  ----- ARRAY (Listas) -----

/*const nome1 = "Washington";
const nome2 = "Pedro";
const nome3 = "Hudson";
console.log(nome1, nome2, nome3);*/

const nomes = ['Washington', 'Pedro', 'Hudson'];
const idades = [21, 12, 32, 85];
const listaAleatoria = ["um texto", 8, true];
console.log(nomes);
console.log(idades);
console.log(listaAleatoria);

// Adicionando itens no array:

nomes.push('Gustavo');
nomes.push('Gabriel');
console.log(nomes)

// Posição específica do array:
console.log('Nome na posição 5 do array:', nomes[0]);



//  ------ OBJETO LITERAL -------
/*
Para objetos utilizamos chaves --> {}
*/

const maria = {
    nome: "Maria",
    idade: 32,
    cidade: "Curitiba"
}

const washington = {
    nome: "Washington",
    idade: 20,
    cidade: "Rio de Janeiro"
}

// buscando objeto todo ou só um argumento
console.log(washington)
console.log(washington.idade)


const pessoas = [];
pessoas.push(maria, washington);
console.log(pessoas);

// ----------------------------------------------------------


//  ----------- CONDICIONAIS ------------
/*
=== estritamente igual (faz a comparação se o tipo e o valor é igual)
== igual (faz o tipo se é o mesmo valor somente)
>= maior ou igual
<= menor ou igual
> maior
< menor

&& e
|| ou
!  negação
*/

const estouComSono = false;

if (estouComSono == true) {
    console.log("Vou dormir");
} else {
    console.log("Vou estudar");
}

if (washington.idade >= 18 && washington.cidade === 'Rio de Janeiro') {
    console.log(washington.nome, "é maior de idade e é do RJ");
} else {
    console.log(washington.nome,"Não é menor de idade ou não é do RJ")
}

if (washington.idade >= 18 || washington.cidade === 'Rio de Janeiro') {
    console.log("Você passou em pelo menos uma das condições");
} else {
    console.log("Não passou em nenhuma condição");
}


const euEstoucomsono = false;

if (!euEstoucomsono) {
    console.log('Não estou com sono');
}

if (!maria.idade >= 18) {
    console.log("É menor do que 25");
}

//---------------------------------------------------------------

//  ----------- LOOPING (Iteração) ------------

for (let i=0; i < 5; i++) {
    console.log('Oi');
}

//  ----------- Função ------------

function darOi5vezes(nome) {
    for (let i=0; i < 5; i++) {
        console.log('Oi', nome);
    }
}

darOi5vezes('Maria');


//  ----------- DOM ------------
// o DOM é utilizado para fazer o JS conversar com o HTML
// o HMTL gera para o JS o "document" que é todo o conteúdo

const botao = document.getElementById('btn');
console.log(botao);

// EVENTOS é todo procedimento que podemos fazer com o botão
// O primeiro argumento para o addEventListener é a ação e o segundo a função

function clicouNoBotao(evento) {
    console.log(evento)
}

function clicouNoBotao2() {
    console.log("Você clicou no botão")
}

botao.addEventListener('click', clicouNoBotao);
botao.addEventListener('click', clicouNoBotao2);

