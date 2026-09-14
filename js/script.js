const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");

    const menuAberto = menu.classList.contains("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});