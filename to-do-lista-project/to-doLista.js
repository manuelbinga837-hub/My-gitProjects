
let input = document.getElementById("tarefa");
let lista = document.getElementById("lista");
let dashbord = document.getElementById("dashbord");


let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.style.width = "104%";
resetBtn.style.height = "45px";
resetBtn.style.marginTop = "10px";
resetBtn.style.background = "#ef4444";
resetBtn.style.border = "none";
resetBtn.style.borderRadius = "10px";
resetBtn.style.color = "white";
resetBtn.style.cursor = "pointer";

resetBtn.onclick = () => {
    lista.innerHTML = "";
};

dashbord.appendChild(resetBtn);


function adicionar() {
    let texto = input.value.trim();

    if (texto === "") return;

    let tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    let span = document.createElement("span");
    span.textContent = texto;

    let btnDel = document.createElement("button");
    btnDel.textContent = "X";
    btnDel.classList.add("delete");

    btnDel.onclick = () => {
        tarefa.remove();
    };

    tarefa.appendChild(span);
    tarefa.appendChild(btnDel);

    lista.appendChild(tarefa);

    input.value = "";
}


input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        adicionar();
    }
});
