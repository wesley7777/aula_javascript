var siglaestado = "SP";
var idade = "92 anos";
var posição1 = "primeiro";
var posição2 = "segundo";  
var frase = "SPFC é o maior time do Brasil";

//array
var títulos = ["paulista", "brasileirão", "mundial", "copa br"];
var goleiro = {nome:"Rogério Ceni", idade:"40 anos"}; //dicionário da variável
var ídolos = [{nome: "Luis Fabiano", camisa: "9"}, {nome: "Kaká", camisa: "8"}]; // lista de dicionário em uma variável

// Alerta de saudações usando variáveis 

alert("Bem vindo!!! ");
alert("SPFC é um clube do estado de " + siglaestado + ", e atualmente está com " + idade + "." );
alert("Seu " + posição1 + " título mundial foi em 1992.");
alert("E o " + posição2 + " em 1993!!!!");
alert("O único título que falta para o São Paulo é o " + títulos[3]); //usando array
alert("O seu maior goleiro é o " + goleiro.nome + " e ele está com " + goleiro.idade);
alert("Um dos seus maiores ídolos é um camisa 9, " + ídolos[0].nome);

// Acompanhando código pelo Console (apertando f12);

console.log(siglaestado);
console.log(posição1 + posição2);
console.log(frase.replace("Brasil", "Mundo")); //trocar palavra da variável
console.log(frase.toUpperCase()); //maiúsculo
console.log(frase.toLowerCase()); //minúsculo
console.log(títulos); //mostrar o array
console.log(títulos.reverse()); //mostrar o array ao contrário
console.log(títulos.toString()); //mostra o array na forma string
console.log(títulos.join(" - ")); //trocar a forma de separar itens do array
console.log(goleiro); //está mostrando o dicionário da variável
console.log(ídolos); //está mostrando a lista do dicionário da variável
 
 



