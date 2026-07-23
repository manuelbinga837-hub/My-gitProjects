let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [ ];
let input=document.getElementById("tarefa");
let btn=document.getElementById("btn");
let msg=document.getElementById("mensagem");
let lista=document.getElementById("lista");

const mostrar = () => {

    lista.innerHTML = "";

    tarefas.forEach((tarefa,indice) => {

        let p = document.createElement("p");
        let div = document.createElement("div");
        let botao = document.createElement("button");

        p.textContent = tarefa;
        botao.textContent = " X ";

        div.appendChild(p);
        div.appendChild(botao);
        lista.appendChild(div);

        botao.addEventListener("click", () => {
              botao.addEventListener("click", ()=>{

      tarefas.splice(indice, 1);

      localStorage.setItem("tarefas", JSON.stringify(tarefas));

      mostrar();

});
              

        });

    }); 

}; 


const adicionar = () => {

    if(input.value === ""){

        alert("Digite uma tarefa");

    }else{

        tarefas.push(input.value);

        localStorage.setItem("tarefas", JSON.stringify(tarefas));

        mostrar();

        input.value = "";

    }

};


btn.addEventListener("click", () => {
    adicionar();
});


mostrar();
