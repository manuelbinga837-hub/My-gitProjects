
function imposto(preco){
    if(preco>=100){
        let cal=preco-(preco*0.15)
        return cal
    }else{
        cal=preco-(preco*0.08)
        return cal
    }
    
}

function produto(preco){
    let i=imposto(preco)
    return "o produto custa " + i + " com imposto!"
}


console.log(produto(200))
