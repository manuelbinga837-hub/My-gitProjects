let prog=document.getElementById("progresso");
let perg=document.getElementById("pergunta");
let opA=document.getElementById("opA");
let opB=document.getElementById("opB");
let opC=document.getElementById("opC");
let btnResp=document.getElementById("btnResponder");
let pontos=document.getElementById("pontos");
let pontuacao = 0;
let respostaEscolhida = "";

let perguntas = [

{
    perg: "Qual é a capital de Angola?",
    A: "Luanda",
    B: "Lisboa",
    C: "Maputo",
    resposta: "A"
},

{
    perg: "Qual linguagem é usada para criar páginas web interativas?",
    A: "C",
    B: "JavaScript",
    C: "Python",
    resposta: "B"
},

{
    perg: "Como se diz 'pão' em inglês?",
    A: "Bread",
    B: "Milk",
    C: "Rice",
    resposta: "A"
},

{
    perg: "Quanto é 8 × 7?",
    A: "54",
    B: "56",
    C: "64",
    resposta: "B"
},

{
    perg: "Qual é o maior oceano do mundo?",
    A: "Atlântico",
    B: "Índico",
    C: "Pacífico",
    resposta: "C"
},

{
    perg: "Como se diz 'escola' em inglês?",
    A: "School",
    B: "House",
    C: "Table",
    resposta: "A"
},

{
    perg: "Quanto é 5 + 5?",
    A: "10",
    B: "11",
    C: "9",
    resposta: "A"
},

{
    perg: "Qual planeta é conhecido como planeta vermelho?",
    A: "Terra",
    B: "Marte",
    C: "Júpiter",
    resposta: "B"
},

{
    perg: "Qual linguagem executa diretamente no navegador?",
    A: "JavaScript",
    B: "Java",
    C: "C++",
    resposta: "A"
},

{
    perg: "Como se diz 'água' em inglês?",
    A: "Water",
    B: "Fire",
    C: "Air",
    resposta: "A"
}

];

let indice=0;

function mostrar(){
    perg.innerHTML=perguntas[indice].perg;
    opA.innerHTML=perguntas[indice].A;
    opB.innerHTML=perguntas[indice].B;
    opC.innerHTML=perguntas[indice].C;
    
    prog.innerHTML = "Pergunta " + (indice + 1) + " de " + perguntas.length;
}
mostrar();

opA.addEventListener("click", function(){
    respostaEscolhida = "A";
    selecionar(opA);
});

opB.addEventListener("click", function(){
    respostaEscolhida = "B";
    selecionar(opB);
});

opC.addEventListener("click", function(){
    respostaEscolhida = "C";
    selecionar(opC);
});

btnResp.addEventListener("click", function(){

    if(respostaEscolhida == perguntas[indice].resposta){
        pontuacao++;
    }

    indice++;
    respostaEscolhida = "";

    if(indice < perguntas.length){
        mostrar();
    } else {
        perg.innerHTML = "Fim do Quiz!";
        opA.style.display = "none";
        opB.style.display = "none";
        opC.style.display = "none";
        responder.style.display = "none";
    }

    pontos.innerHTML = "Pontos: " + pontuacao;
    opA.classList.remove("selecionado");
opB.classList.remove("selecionado");
opC.classList.remove("selecionado");

});

let reiniciar = document.getElementById("reiniciar");

reiniciar.addEventListener("click", function(){

    indice = 0;
    pontuacao = 0;

    opA.style.display = "block";
    opB.style.display = "block";
    opC.style.display = "block";
    responder.style.display = "block";

    mostrarPergunta();

    pontos.innerHTML = "Pontos: 0";
});

function selecionar(botao){
    
    opA.classList.remove("selecionado");
    opB.classList.remove("selecionado");
    opC.classList.remove("selecionado");

    botao.classList.add("selecionado");
}




  
