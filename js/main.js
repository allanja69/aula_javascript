
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por clicar");
    //alert("Obrigado por clicar.");
}

function redirecionar(){
    //window.open("https://www.google.com/");
    window.location.href="https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d";

}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse !";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Obrigado por passar o mouse!")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui !";
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui!";
}

function load(){
    alert("Página carregada!!!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}





/*
function soma(n1, n2){
    return n1=n2;
}
*/

/*
var validar = 0;

function validaidade(idade){
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é sua idade?");
validaidade(idade)
console.log(validar);
*/


/*
var d = new Date();
alert(d.getDay()); 
alert(d.getMinutes());
alert(d.getMonth())
*/


/*
var count;
for(count=0; count <= 8; count++){
    alert(count)
};
*/



/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/



/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade. Acesso liberado.");
}else{
    alert("Menor de idade. Acesso negado.");
};*/



/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/



/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.cor);
alert(fruta.nome);
*/


//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);



//var nome = "Allan Amorim"
//var idade = 32
//var idade2 = 58
//var frase = "Japão é o melhor time do mundo.";
//alert("Bem vindo " + nome + " você tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));