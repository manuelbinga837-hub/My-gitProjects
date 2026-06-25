let segredo = Math.floor(Math.random() * 5) + 1;
function clicar(){
    let res=document.getElementById("res")
    
    let tentativa=parseInt(document.getElementById("num").value);
    
    if(tentativa==segredo){
        res.innerHTML="Certa resposta!"
        res.style.color="green"
    }else{
        
        if(tentativa<segredo){
            res.innerHTML=" Resposta errada <br> tente um número maior!"
        }else{
            res.innerHTML=" Resposta errada <br> tente um número menor!"
        }
        res.style.color="red"
    }
    
    
}

function reiniciar(){
    let segredo = Math.floor(Math.random() * 5) + 1;
    document.getElementById("num").value="";
    document.getElementById("res").innerHTML="";
}

