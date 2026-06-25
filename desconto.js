function desconto(preco){
    if(preco>=100){
       return preco-(preco*0.10)
    }else{
       return preco-(preco*0.05)
    }
}

function precoFinal(preco){
    let p=desconto(preco)
    return "O preco final e:"+p
}
console.log(precoFinal(50))

