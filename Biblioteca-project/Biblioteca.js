let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let paginas = document.getElementById("paginas");

let btnCadastrar = document.getElementById("btnCadastrar");

let pesquisa = document.getElementById("pesquisa");
let btnPesquisar = document.getElementById("btnPesquisar");

let listaLivros = document.getElementById("listaLivros");

let livros = JSON.parse(localStorage.getItem("livros")) || [];

;

const mostrar=(lista)=>{
      listaLivros.innerHTML="";
      lista.forEach((livro,indice) =>{
            let div=document.createElement("div");
            let h3=document.createElement("h3");
            let pAutor=document.createElement("p");
            let pPaginas=document.createElement("p");
            let pEstado=document.createElement("p");
            let btn1=document.createElement("button");
            let btn2=document.createElement("button");
            let btn3=document.createElement("button");
            
             h3.textContent = livro.titulo;

             pAutor.textContent = "Autor: " + livro.autor;

             pPaginas.textContent = "Páginas: " + livro.paginas;

              if(livro.disponivel){
               pEstado.textContent = "Estado: Disponível";
}else{
              pEstado.textContent = "Estado: Emprestado";
}
             if(livro.disponivel){

           btn1.textContent = "Emprestar";

}else{

        btn1.textContent = "Devolver";

}
            
            btn1.addEventListener("click",()=>{
                  livro.disponivel = ! livro.disponivel;
                  
                  localStorage.setItem("livros",JSON.stringify(livros));
                  mostrar(livros);
            })
            
            
             btn2.textContent="Editar";
            
            btn2.addEventListener("click",()=>{
                  let novoTitulo=prompt("digite o novo título:\n");
                  let novoAutor=prompt("digite o novo autor:\n");
                  let novaPagina=prompt("digite o númeri páginas:\n");
                  
                  livros[indice].titulo=novoTitulo;
                  livros[indice].autor=novoAutor;
                  livros[indice].paginas=novaPagina;
                  localStorage.setItem("livros",JSON.stringify(livros));
                  mostrar(livros);
                  
            })
            
            
            btn3.textContent="Remover";
            btn3.addEventListener("click", ()=>{

               livros.splice(indice,1);

               localStorage.setItem("livros", JSON.stringify(livros));

                mostrar(livros);

});
            
             div.appendChild(h3);
             div.appendChild(pAutor);
             div.appendChild(pPaginas);
             div.appendChild(pEstado);

              div.appendChild(btn1);
              div.appendChild(btn2);
              div.appendChild(btn3);
              listaLivros.appendChild(div);
            
            
            
            
            
      });
}

const cadastrar=()=>{
      if(titulo.value=="" ){
            alert("digite o titulo")
      }else if(autor.value==""){
            alert("digite o autor")
      }else if(paginas.value==""){
            alert("digite as páginas")
      }else{
            let livro={
                  titulo:titulo.value,
                  autor:autor.value,
                  paginas:paginas.value,
                  disponivel:true
            }
            livros.push(livro);
            localStorage.setItem("livros",JSON.stringify(livros));
            mostrar(livros);
             titulo.value="";
             autor.value="";
             paginas.value="";
      }
      
      
}

btnPesquisar.addEventListener("click", ()=>{

    let texto = pesquisa.value.toLowerCase();

    let resultado = livros.filter((livro)=>{

        return livro.titulo.toLowerCase().includes(texto);

    });

  if(resultado.length===0){
     alert("Livro não encontrado!")
  }else{
   mostrar(resultado);
  }

});


btnCadastrar.addEventListener("click", ()=>{
      cadastrar();
});
mostrar(livros);
