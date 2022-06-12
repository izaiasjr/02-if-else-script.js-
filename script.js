//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 20;
if (idade >= 18){
    console.log("você está acima de 18 anos");
}else{
    console.log("você não está acima de 18 anos")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let adulto = 18;
let animais = "cachorro";
if ((adulto >= 18) && (animais === "cachorro")){
    console.log("sua idade permite a sua entrada, mas sem animais ! ");
 }else{
    console.log("você não atendeu os requisitos");
 }

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mesAniversario = "janeiro";
if (mesAniversario == "janeiro" || mesAniversario == "dezembro"){
    console.log("true")
}else{
    console.log("false")
}    

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = 'Izaias';
if(nome.substring(0, 1) == 'R') {
    console.log("Seu nome começa com R");
} 
else {
    console.log("Seu nome não começa com R");
} 

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobreNome = 'Junior';
if (sobreNome.length >= 6 || sobreNome.substring(0,1) === 'E'){
    console.log("Seu sobrenome têm mais de 6 letras ou começa com E");
}
else {
    console.log("Seu sobrenome NÃO têm mais de 6 letras e NÃO começa com E");
} 