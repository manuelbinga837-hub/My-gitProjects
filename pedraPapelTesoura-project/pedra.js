let placar=document.getElementById("placar");
let btnpedra=document.getElementById("pedra");
let btnpapel=document.getElementById("papel");
let btntesoura=document.getElementById("tesoura");
let res=document.getElementById("resultado");
let escolhaJogador;
let cpu;
let pontosJogador=0;
let pontosCpu=0;

function jogadaCpu(){
    cpu = Math.floor(Math.random() * 3) + 1;
    if(cpu == 1){
    cpu = "pedra";
}else if(cpu == 2){
    cpu = "papel";
}else{
    cpu = "tesoura";
}
    
    
}
function atualizarPlacar(){

    placar.innerHTML =
    "Jogador: " + pontosJogador +
    " | CPU: " + pontosCpu;

}

function comparar(){

    if (escolhaJogador === cpu){

        res.innerHTML = "EMPATE";

    } else if (
        (escolhaJogador === "pedra" && cpu === "tesoura") ||
        (escolhaJogador === "papel" && cpu === "pedra") ||
        (escolhaJogador === "tesoura" && cpu === "papel")
    ){

        res.innerHTML = "VOCÊ GANHOU 🎉";
        pontosJogador++;

    } else {

        res.innerHTML = "CPU GANHOU 😢";
        pontosCpu++;
    }
    atualizarPlacar();

    
}


btnpedra.addEventListener("click", pedra);
btnpapel.addEventListener("click", papel);
btntesoura.addEventListener("click", tesoura);

function pedra(){
    escolhaJogador="pedra"
    jogadaCpu();
    comparar()
}
function papel(){
     escolhaJogador="papel"
    jogadaCpu();
    comparar()
}
function tesoura(){
     escolhaJogador="tesoura"
    jogadaCpu();
    comparar();
}

  
