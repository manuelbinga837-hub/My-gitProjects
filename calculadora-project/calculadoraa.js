function somar(){
    
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let res=document.getElementById("resultado")
    let resSoma=num1+num2;
    res.innerHTML="Resultado: "+resSoma;
}
function subtrair(){
    let num3=Number(document.getElementById("num1").value);
    let num4=Number(document.getElementById("num2").value);
    let res1=document.getElementById("resultado")
    let resSub=num3-num4;
    res1.innerHTML="Resultado: "+resSub;
    
}

function multiplicar(){
     let num5=Number(document.getElementById("num1").value);
    let num6=Number(document.getElementById("num2").value);
    let res2=document.getElementById("resultado")
    let resMult=num5*num6;
    res2.innerHTML="Resultado: "+resMult;
}

function dividir(){
     let num7=Number(document.getElementById("num1").value);
    let num8=Number(document.getElementById("num2").value);
    let res4=document.getElementById("resultado")
    let resdiv=num7/num8;
    res4.innerHTML="Resultado: "+resdiv;
}

                    
