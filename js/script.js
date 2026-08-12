document.addEventListener("DOMContentLoaded", function () {

    const welcomeModal = document.getElementById("welcomeModal");
    const welcomeButton = document.getElementById("welcomeButton");

    welcomeButton.addEventListener("click", function () {
        welcomeModal.style.display = "none";
    });

});
document.addEventListener("DOMContentLoaded", function () {

    const contactModal = document.getElementById("contactModal");
    const closeContact = document.getElementById("closeContact");

    // Procura o botão Contato do menu
    const contactButton = document.getElementById("btn-contato");

contactButton.addEventListener("click", function () {
    contactModal.style.display = "flex";
});

    // Abrir o painel de contato
    if (contactButton) {
        contactButton.addEventListener("click", function (event) {
            event.preventDefault();

            contactModal.style.display = "flex";
        });
    }

    // Fechar pelo X
    closeContact.addEventListener("click", function () {
        contactModal.style.display = "none";
    });

    // Fechar ao clicar fora do painel
    contactModal.addEventListener("click", function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
    const orderButton = document.getElementById("orderButton");
const scheduleButton = document.getElementById("scheduleButton");
const emailButton = document.getElementById("emailButton");

const scheduleModal = document.getElementById("scheduleModal");
const closeSchedule = document.getElementById("closeSchedule");

scheduleButton.addEventListener("click", function () {
    contactModal.style.display = "none";
    scheduleModal.style.display = "flex";
});

closeSchedule.addEventListener("click", function () {
    scheduleModal.style.display = "none";
});

scheduleModal.addEventListener("click", function (event) {
    if (event.target === scheduleModal) {
        scheduleModal.style.display = "none";
    }
});
const btnTransas = document.getElementById("btn-transas");
const secaoTrancas = document.getElementById("trancas");

btnTransas.addEventListener("click", function () {
    secaoTrancas.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
const btnFastFood = document.getElementById("btn-fast-food");
const secaoFastFood = document.getElementById("fastfood");

btnFastFood.addEventListener("click", function () {
    secaoFastFood.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});



});