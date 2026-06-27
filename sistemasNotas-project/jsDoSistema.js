function veri(){
    let nota=Number(document.getElementById("nota").value);
    let res=document.getElementById("res")
    
    if (isNaN(nota)) {
    res.innerHTML = "Por favor, insere uma nota válida!";
    res.style.color = "#0f172a";
    return;
}
    
    if(nota>=18){
        res.innerHTML="Excelente nota!"
        res.style.color="#16a34a"
    }else if(nota>=14){
        res.innerHTML="Boa nota!"
        res.style.color="#2563eb"
    }else if(nota>=10){
        res.innerHTML="Nota suficiente!"
        res.style.color="#f59e0b"
    }else{
        res.innerHTML="Muito mal (Reprovado)"
        res.style.color="#dc2626"
        
        
    }
}

          
